import { CustomCheckbox } from "@/components";
import type { FormCheckBoxesProps } from "@/components/types";

const FormCheckboxessCard = ({ title, data, formik }: FormCheckBoxesProps) => {

    const { errors, touched, values, setFieldValue, setFieldTouched } = formik;

    const handleCheckboxChange = (value: string) => {
        setFieldValue(
            "Terms",
            values.Terms.includes(value)
                ? values.Terms.filter((item: any) => item !== value)
                : [...values.Terms, value]
        );
    };

    const handleBlur = () => {
        setFieldTouched("Terms", true);
    };

    return (
        <div className="mb-10 lg:mb-[50px]">
            <h1 className="capitalize font-medium text-base md:text-2xl lg:text-medium leading-tight text-black mb-6 lg:mb-[30px]">{title}</h1>

            <div className="flex flex-col gap-6">
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <p className="block mt-[20px] lg:mt-0 mb-[12px] font-normal text-base/6 text-bermuda">{item.notice}</p>

                            {item.list && (
                                <div>
                                    {item.list.map((checkbox) => (
                                        <CustomCheckbox
                                            key={checkbox.id}
                                            id={checkbox.name}
                                            name={checkbox.name}
                                            value={values[checkbox.name] || ""}
                                            checked={values.Terms.includes(checkbox.name)}
                                            onChange={() => handleCheckboxChange(checkbox.name)}
                                            onBlur={handleBlur}
                                            custom_label_for={checkbox.name}
                                            checkboxParent="!items-start"
                                            labelClassName="!text-[15px]/6 block mb-4"
                                            custom_label_text={checkbox.label}
                                        />

                                    ))}
                                </div>
                            )}

                            {touched.Terms && typeof errors.Terms === "string" && (
                                <div className="text-red-600 text-sm mt-2">
                                    {errors.Terms}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FormCheckboxessCard;