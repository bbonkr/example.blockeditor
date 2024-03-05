"use client";
import { normalizeFormName } from "@/libs/normalizeFormName";
import { FormKeyValueModel } from "@/models/FormKeyValueModel";
import { PageBlockFormItemModel } from "@/models/PageBlockFormItemModel";
import { PageBlockFormItemType } from "@/models/PageBlockFormItemType";
import React, { useEffect, useMemo } from "react";

type PageBlockFormItemProps = {
  item: PageBlockFormItemModel;
  values?: FormKeyValueModel[];
  onChange?: (
    formItem: PageBlockFormItemModel,
    formName: string,
    value: string | number | undefined
  ) => void;
  showFormName?: boolean;
};

export const PageBlockFormItem = ({
  item,
  values,
  onChange,
  showFormName,
}: PageBlockFormItemProps) => {
  const formName: string = normalizeFormName(item.name) ?? item.id;
  const [checkedValues, setCheckedValues] = React.useState<string[]>([]);

  const formValue = useMemo(() => {
    const keyValuePair = values?.find((x) => x.key === formName);
    return keyValuePair?.value ?? "";
  }, [values]);

  const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (item.formItemType === PageBlockFormItemType.CheckBox) {
      if (e.target.checked) {
        setCheckedValues((prevState) => {
          const foundIndex = prevState?.findIndex((x) => x === e.target.value);
          if (foundIndex < 0) {
            prevState.push(e.target.value);
            return [...prevState];
          }

          return prevState;
        });
      } else {
        setCheckedValues((prevState) => {
          const foundIndex = prevState.findIndex((x) => x === e.target.value);
          if (foundIndex >= 0) {
            prevState.splice(foundIndex, 1);
            return [...prevState];
          }
          return prevState;
        });
      }
    } else {
      setCheckedValues((_) => [e.target.value]);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(item, formName, checkedValues.join(", "));
    }
  }, [checkedValues]);

  if (item.formItemType === PageBlockFormItemType.MultiLineText) {
    return (
      <label className="flex flex-col w-full">
        <span>
          {item.name} {showFormName && <small>({formName})</small>}
        </span>
        <textarea
          id={`formitem-${item.id}`}
          className="dark:bg-slate-800 dark:text-slate-200"
          name={formName}
          placeholder={item.placeholder}
          rows={3}
          onChange={(e) => onChange && onChange(item, formName, e.target.value)}
          value={formValue}
        />
      </label>
    );
  }

  if (item.formItemType === PageBlockFormItemType.Select) {
    return (
      <label className="flex flex-col w-full">
        <span>
          {item.name} {showFormName && <small>({formName})</small>}
        </span>
        <select
          name={formName}
          value={formValue}
          className="dark:bg-slate-800 dark:text-slate-200"
          onChange={(e) => onChange && onChange(item, formName, e.target.value)}
        >
          {item.placeholder && (
            <option id={`select-option-${item.id}`} value="">
              {item.placeholder}
            </option>
          )}
          {item.options?.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
    );
  }

  if (item.formItemType === PageBlockFormItemType.CheckBox) {
    return (
      <div className="flex flex-col gap-3 w-full">
        <label>{item.name}</label>
        <div className="flex flex-row gap-3">
          {item.options?.map((option) => (
            <label key={option.id}>
              <input
                type="checkbox"
                value={option.name}
                onChange={handleCheckedChange}
              />{" "}
              {option.name}
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (item.formItemType === PageBlockFormItemType.RadioButton) {
    return (
      <div className="flex flex-col gap-3 w-full">
        <label>{item.name}</label>
        <div className="flex flex-row gap-3">
          {item.options?.map((option) => (
            <label key={option.id}>
              <input
                type="radio"
                name={`formitem-radio-${item.id}`}
                value={option.name}
                onChange={handleCheckedChange}
              />{" "}
              {option.name}
            </label>
          ))}
        </div>
      </div>
    );
  }

  return (
    <label className="flex flex-col w-full">
      <span>
        {item.name}
        {showFormName && <small>({formName})</small>}
      </span>
      <input
        type="text"
        id={`formitem-${item.id}`}
        className="dark:bg-slate-800 dark:text-slate-200"
        name={formName}
        placeholder={item.placeholder}
        value={formValue}
        onChange={(e) => onChange && onChange(item, formName, e.target.value)}
      />
    </label>
  );
};
