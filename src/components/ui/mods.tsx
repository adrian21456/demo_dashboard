import { UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { proper } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Checkbox } from "./checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import React, { useRef, useState } from "react";

function ModForm({
  form,
  submitEvent,
  className,
  style,
  children,
}: {
  form: UseFormReturn | any;
  submitEvent: any;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitEvent)}
        className={cn("space-y-8", className)}
        style={style}
      >
        {children}
      </form>
    </Form>
  );
}

function ModButton({
  className,
  style,
  label = "Submit",
}: {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}) {
  return (
    <Button className={className} style={style} type="submit">
      {label}
    </Button>
  );
}

function ModFormField({
  form,
  name,
  label,
  description,
  description_location = "top",
  type,
  placeholder,
  className,
  style,
  containerClassName,
  containerStyle,
}: {
  form: any;
  name: string;
  className?: string;
  style?: React.CSSProperties;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  label?: React.ReactNode;
  description?: React.ReactNode;
  description_location?: "top" | "bottom";
  type?: string;
  placeholder?: string;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={containerClassName} style={containerStyle}>
          <FormLabel>{label ?? proper(name)}</FormLabel>
          {description && description_location === "top" && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className={className}
              style={style}
            />
          </FormControl>
          {description && description_location === "bottom" && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function ModFormFile({
  form,
  name,
  label,
  description,
  description_location = "top",
  className,
  style,
  containerClassName,
  containerStyle,
  accept,
  multiple = false,
}: {
  form: any;
  name: string;
  className?: string;
  style?: React.CSSProperties;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  label?: React.ReactNode;
  description?: React.ReactNode;
  description_location?: "top" | "bottom";
  accept?: string;
  multiple?: boolean;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={containerClassName} style={containerStyle}>
          <FormLabel>{label ?? proper(name)}</FormLabel>
          {description && description_location === "top" && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormControl>
            <Input
              type="file"
              className={className}
              style={style}
              accept={accept}
              multiple={multiple}
              name={field.name}
              onChange={(e) => field.onChange(e.target.files)}
              ref={field.ref}
            />
          </FormControl>
          {description && description_location === "bottom" && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function ModFormSelect({
  form,
  name,
  optionData,
  label,
  description,
  description_location = "top",
  placeholder,
  className,
  style,
  containerClassName,
  containerStyle,
}: {
  form: any;
  name: string;
  className?: string;
  style?: React.CSSProperties;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  label?: React.ReactNode;
  description?: React.ReactNode;
  description_location?: "top" | "bottom";
  placeholder?: string;
  optionData?: { label: string; value: string }[];
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={containerClassName} style={containerStyle}>
          <FormLabel>{label ?? proper(name)}</FormLabel>
          {description && description_location === "top" && (
            <FormDescription>{description}</FormDescription>
          )}
          <Select {...field} onValueChange={field.onChange}>
            <SelectTrigger className={cn("w-full", className)} style={style}>
              <SelectValue
                placeholder={placeholder ?? `Select ${label ?? proper(name)}`}
              />
            </SelectTrigger>
            <SelectContent>
              {optionData?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && description_location === "bottom" && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function ModFormRadioGroup({
  form,
  name,
  optionData,
  label,
  description,
  description_location = "top",
  className,
  style,
  groupClassName,
  groupStyle,
  containerClassName,
  containerStyle,
  labelClassName,
  labelStyle,
}: {
  form: any;
  name: string;
  className?: string;
  style?: React.CSSProperties;
  groupClassName?: string;
  groupStyle?: React.CSSProperties;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  label?: React.ReactNode;
  description?: React.ReactNode;
  description_location?: "top" | "bottom";
  optionData?: { label: string; value: string }[];
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={containerClassName} style={containerStyle}>
          <FormLabel>{label ?? proper(name)}</FormLabel>
          {description && description_location === "top" && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={cn("gap-0 flex flex-col space-y-1", groupClassName)}
              style={groupStyle}
            >
              {optionData?.map((option) => (
                <FormItem
                  key={option.value}
                  className={cn(
                    "flex items-center space-x-3 space-y-0",
                    className
                  )}
                  style={style}
                >
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel
                    className={cn("font-normal", labelClassName)}
                    style={labelStyle}
                  >
                    {option.label}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          {description && description_location === "bottom" && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function ModFormCheckboxGroup({
  form,
  name,
  optionData,
  label,
  description,
  description_location = "top",
  className,
  style,
  groupClassName,
  groupStyle,
  containerClassName,
  containerStyle,
  labelClassName,
  labelStyle,
}: {
  form: any;
  name: string;
  className?: string;
  style?: React.CSSProperties;
  groupClassName?: string;
  groupStyle?: React.CSSProperties;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  label?: React.ReactNode;
  description?: React.ReactNode;
  description_location?: "top" | "bottom";
  optionData: { label: string; value: string }[];
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className={containerClassName} style={containerStyle}>
          <FormLabel>{label ?? proper(name)}</FormLabel>
          {description && description_location === "top" && (
            <FormDescription>{description}</FormDescription>
          )}
          <div
            className={cn("gap-0 flex flex-col space-y-1", groupClassName)}
            style={groupStyle}
          >
            {optionData.map((option) => (
              <FormField
                key={option.value}
                control={form.control}
                name={name}
                render={({ field }) => {
                  return (
                    <FormItem
                      key={option.value}
                      className={cn(
                        "flex flex-row items-start space-x-3 space-y-0",
                        className
                      )}
                      style={style}
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(option.value)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, option.value])
                              : field.onChange(
                                  field.value.filter(
                                    (v: string) => v !== option.value
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel
                        className={cn("font-normal", labelClassName)}
                        style={labelStyle}
                      >
                        {option.label}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>
          {description && description_location === "bottom" && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function ModFormComboBox({
  form,
  name,
  optionData,
  label,
  description,
  description_location = "top",
  className,
  style,
  groupClassName,
  groupStyle,
  containerClassName,
  containerStyle,
  labelClassName,
  labelStyle,
  placeholder,
}: {
  form: any;
  name: string;
  className?: string;
  style?: React.CSSProperties;
  groupClassName?: string;
  groupStyle?: React.CSSProperties;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  labelClassName?: string;
  placeholder?: string;
  labelStyle?: React.CSSProperties;
  label?: React.ReactNode;
  description?: React.ReactNode;
  description_location?: "top" | "bottom";
  optionData: { label: string; value: string }[];
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={containerClassName} style={containerStyle}>
          <FormLabel>{label ?? proper(name)}</FormLabel>
          {description && description_location === "top" && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormControl>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {field.value
                    ? optionData.find(
                        (framework) => framework.value === field.value
                      )?.label
                    : "Select framework..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput
                    placeholder={`Search ${label ?? proper(name)} ...`}
                  />
                  <CommandList>
                    <CommandEmpty>
                      No {label ?? proper(name)} found.
                    </CommandEmpty>
                    <CommandGroup>
                      {optionData.map((framework) => (
                        <CommandItem
                          className={labelClassName}
                          style={labelStyle}
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            field.onChange(currentValue);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              field.value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </FormControl>
          {description && description_location === "bottom" && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export {
  ModFormField,
  ModFormSelect,
  ModFormRadioGroup,
  ModFormCheckboxGroup,
  ModFormComboBox,
  ModForm,
  ModButton,
  ModFormFile,
};
