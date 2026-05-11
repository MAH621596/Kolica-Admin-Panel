import type { FormFieldsCardProps } from "@/components/types";
import {
  CustomSelect,
  CustomInput,
  CustomLabel,
} from "@/components";

const FormFieldsCard = ({ title, data, formik }: FormFieldsCardProps) => {

  const { errors, touched, values, setFieldValue, setFieldTouched } = formik;

  return (
    <div className="mb-10 lg:mb-[50px]">
      <h1 className="capitalize font-medium text-base md:text-2xl lg:text-medium leading-tight text-black mb-6 lg:mb-[30px]">{title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item) => {
          const fieldName = item.name as keyof typeof values;

          return (
            <div key={item.id} className={`${item.showInline ? "" : "md:col-span-2"}`}>
              {/* Label (common) */}
              <CustomLabel
                className="block mt-[20px] lg:mt-0 mb-[12px] text-base text-bermuda"
                text={item.label}
              />

              {item.input_field &&
                <CustomInput
                  id={fieldName}
                  name={fieldName}
                  type="text"
                  className="h-[42px] w-full p-[14px] text-bermuda !text-sm placeholder:text-tiny"
                  placeholder={item.placeholder}
                  value={values[fieldName] || ""}
                  onChange={(val) =>
                    setFieldValue(fieldName, val)
                  }
                  onBlur={() => {
                    setFieldTouched(fieldName, true)
                  }}
                />
              }
              {item.input_select &&
                <CustomSelect
                  name={fieldName}
                  options={item.options}
                  divider={true}
                  value={values[fieldName] || item.select_placeholder}
                  onChange={(val) =>
                    setFieldValue(fieldName, val)
                  }
                  onBlur={() => { setFieldTouched(fieldName, true) }}
                  className="w-full rounded-[9px] text-[#94A3B3]"
                  innerOptionsClass="rounded-[9px] text-[#94A3B3]"
                />
              }

              {touched[fieldName] && errors[fieldName] && (
                <div className="text-red-600 text-sm leading-7">
                  {errors[fieldName] as string}
                </div>
              )}

              {item.Note &&
                <p className="block mt-[20px] lg:mt-0 mb-[12px] text-sm text-bermuda">{item.Note}</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FormFieldsCard