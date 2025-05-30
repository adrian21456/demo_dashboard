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
import {
  ArrowUpDown,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  MoreHorizontal,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import React, { useRef, useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

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
                  className="w-full justify-between"
                >
                  {field.value
                    ? optionData.find(
                        (framework) => framework.value === field.value
                      )?.label
                    : `Select ${label ?? proper(name)} ...`}
                  <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
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

function ModTableHeader({
  id,
  label,
  type = "string",
  sortable = true,
  concealable = true,
  headerClass = "",
  cellClass = "",
}: any): ColumnDef<any>[] {
  return [
    {
      accessorKey: id,
      enableSorting: sortable,
      enableHiding: concealable,
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="!px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span className={cn("", headerClass)}>{label ?? proper(id)}</span>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        let value = row.getValue(id) as React.ReactNode;
        if (type === "number") {
          value = row.getValue(id) as number;
        }
        return <div className={cn("text-sm ", cellClass)}>{value}</div>;
      },
    },
  ];
}

function ModTableAction({ menus }: { menus: any }) {
  return [
    {
      id: "actions",
      enableHiding: false,
      size: 0,
      cell: ({ row }: any) => {
        const data = row.original;

        return (
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                {menus.map((menu) => {
                  return (
                    <DropdownMenuItem
                      key="menu.label"
                      onClick={() => {
                        menu.event(data);
                      }}
                    >
                      {menu.label}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];
}

function DataTablePagination<TData>({ table }: any) {
  return (
    <div className="flex items-center justify-between px-2 mt-2">
      {/* <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div> */}
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[1, 3, 5, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

function ModTable({ data, columns }: { data: any; columns: any }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Search..."
          value={(table.getState().globalFilter as string) ?? ""}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{
                        minWidth: header.column.columnDef.size,
                        maxWidth: header.column.columnDef.size,
                        width: header.column.columnDef.size,
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div> */}
      <DataTablePagination table={table} />
    </div>
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
  ModTableHeader,
  ModTableAction,
  ModTable,
};
