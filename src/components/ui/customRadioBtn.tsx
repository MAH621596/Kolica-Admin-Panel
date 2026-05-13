import type { RadioBtnProps } from "@/components/types";
import { CustomRadioIcon, CustomInput, CustomLabel } from "@/components";

const CustomRadioBtn = ({
    id,
    name,
    value,
    checked,
    radioBtnParent,
    custom_label_for,
    inputClassName,
    labelClassName,
    custom_label_text,
    onBlur,
    onChange,
}: RadioBtnProps) => {
    return (
        <div className={`${radioBtnParent} flex gap-[12px] items-center justify-center`}>
            <div className="relative">
                <CustomInput
                    id={id}
                    name={name}
                    value={value}
                    type="radio"
                    checked={checked}
                    onBlur={() => onBlur?.(String(name))}
                    onChange={(val) => onChange?.(val as boolean)}
                    className={`${inputClassName} peer 
                    appearance-none w-[18px] h-[18px]
                    border-2 border-[#626262] hover:border-[#B1222C]
                    rounded-full bg-white mb-[-5px] !p-[8px]
                    checked:bg-[#B1222C] checked:border-0 checked:shadow-[0_0px_0px_0.25rem_rgba(177,34,44,.25)]`}
                />
                <CustomRadioIcon />
            </div>
            <CustomLabel
                className={`${labelClassName} text-[18px]`}
                text={custom_label_text}
                htmlFor={custom_label_for}
            />
        </div>
    )
}

export default CustomRadioBtn;