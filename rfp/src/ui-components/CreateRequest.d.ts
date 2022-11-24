/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateRequestInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
    Field3?: string;
};
export declare type CreateRequestValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
    Field3?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateRequestOverridesProps = {
    CreateRequestGrid?: FormProps<GridProps>;
    Field0?: FormProps<TextAreaFieldProps>;
    Field1?: FormProps<TextFieldProps>;
    Field2?: FormProps<TextFieldProps>;
    Field3?: FormProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CreateRequestProps = React.PropsWithChildren<{
    overrides?: CreateRequestOverridesProps | undefined | null;
} & {
    onSubmit: (fields: CreateRequestInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: CreateRequestInputValues) => CreateRequestInputValues;
    onValidate?: CreateRequestValidationValues;
} & React.CSSProperties>;
export default function CreateRequest(props: CreateRequestProps): React.ReactElement;
