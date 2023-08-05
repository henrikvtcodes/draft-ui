/* eslint-disable prettier/prettier */
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

type ComponentRegistry = Record<
  string,
  Record<
    string,
    {
      name: string
      story: string
      component: string
      file: string
    }
  >
>

export const Index: ComponentRegistry = {
  "Breadcrumbs": {
    "default": {
      name: "Breadcrumbs-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Breadcrumbs/default")),
      file: "registry/Breadcrumbs/default.tsx"
    },
  },
  "Button": {
    "default": {
      name: "Button-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Button/default")),
      file: "registry/Button/default.tsx"
    },
    "disabled": {
      name: "Button-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/Button/disabled")),
      file: "registry/Button/disabled.tsx"
    },
    "sizes": {
      name: "Button-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/Button/sizes")),
      file: "registry/Button/sizes.tsx"
    },
    "theme": {
      name: "Button-theme",
      story: "theme",
      component: React.lazy(() => import("@/registry/Button/theme")),
      file: "registry/Button/theme.tsx"
    },
  },
  "Calendar": {
    "default": {
      name: "Calendar-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Calendar/default")),
      file: "registry/Calendar/default.tsx"
    },
  },
  "Checkbox": {
    "default": {
      name: "Checkbox-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Checkbox/default")),
      file: "registry/Checkbox/default.tsx"
    },
    "sizes": {
      name: "Checkbox-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/Checkbox/sizes")),
      file: "registry/Checkbox/sizes.tsx"
    },
  },
  "CheckboxGroup": {
    "default": {
      name: "CheckboxGroup-default",
      story: "default",
      component: React.lazy(() => import("@/registry/CheckboxGroup/default")),
      file: "registry/CheckboxGroup/default.tsx"
    },
    "horizontal": {
      name: "CheckboxGroup-horizontal",
      story: "horizontal",
      component: React.lazy(() => import("@/registry/CheckboxGroup/horizontal")),
      file: "registry/CheckboxGroup/horizontal.tsx"
    },
  },
  "Combobox": {
    "default": {
      name: "Combobox-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Combobox/default")),
      file: "registry/Combobox/default.tsx"
    },
    "with-button": {
      name: "Combobox-with-button",
      story: "with-button",
      component: React.lazy(() => import("@/registry/Combobox/with-button")),
      file: "registry/Combobox/with-button.tsx"
    },
  },
  "DateField": {
    "default": {
      name: "DateField-default",
      story: "default",
      component: React.lazy(() => import("@/registry/DateField/default")),
      file: "registry/DateField/default.tsx"
    },
    "disabled": {
      name: "DateField-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/DateField/disabled")),
      file: "registry/DateField/disabled.tsx"
    },
  },
  "DateInput": {
    "default": {
      name: "DateInput-default",
      story: "default",
      component: React.lazy(() => import("@/registry/DateInput/default")),
      file: "registry/DateInput/default.tsx"
    },
    "sizes": {
      name: "DateInput-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/DateInput/sizes")),
      file: "registry/DateInput/sizes.tsx"
    },
  },
  "DatePicker": {
    "default": {
      name: "DatePicker-default",
      story: "default",
      component: React.lazy(() => import("@/registry/DatePicker/default")),
      file: "registry/DatePicker/default.tsx"
    },
  },
  "DateRangePicker": {
    "default": {
      name: "DateRangePicker-default",
      story: "default",
      component: React.lazy(() => import("@/registry/DateRangePicker/default")),
      file: "registry/DateRangePicker/default.tsx"
    },
  },
  "GridList": {
    "default": {
      name: "GridList-default",
      story: "default",
      component: React.lazy(() => import("@/registry/GridList/default")),
      file: "registry/GridList/default.tsx"
    },
  },
  "IconButton": {
    "default": {
      name: "IconButton-default",
      story: "default",
      component: React.lazy(() => import("@/registry/IconButton/default")),
      file: "registry/IconButton/default.tsx"
    },
    "disabled": {
      name: "IconButton-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/IconButton/disabled")),
      file: "registry/IconButton/disabled.tsx"
    },
    "sizes": {
      name: "IconButton-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/IconButton/sizes")),
      file: "registry/IconButton/sizes.tsx"
    },
    "theme": {
      name: "IconButton-theme",
      story: "theme",
      component: React.lazy(() => import("@/registry/IconButton/theme")),
      file: "registry/IconButton/theme.tsx"
    },
  },
  "Input": {
    "default": {
      name: "Input-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Input/default")),
      file: "registry/Input/default.tsx"
    },
    "sizes": {
      name: "Input-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/Input/sizes")),
      file: "registry/Input/sizes.tsx"
    },
  },
  "Label": {
    "default": {
      name: "Label-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Label/default")),
      file: "registry/Label/default.tsx"
    },
  },
  "Menu": {
    "as-checkbox": {
      name: "Menu-as-checkbox",
      story: "as-checkbox",
      component: React.lazy(() => import("@/registry/Menu/as-checkbox")),
      file: "registry/Menu/as-checkbox.tsx"
    },
    "as-radio": {
      name: "Menu-as-radio",
      story: "as-radio",
      component: React.lazy(() => import("@/registry/Menu/as-radio")),
      file: "registry/Menu/as-radio.tsx"
    },
    "default": {
      name: "Menu-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Menu/default")),
      file: "registry/Menu/default.tsx"
    },
    "disabled": {
      name: "Menu-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/Menu/disabled")),
      file: "registry/Menu/disabled.tsx"
    },
    "with-sections": {
      name: "Menu-with-sections",
      story: "with-sections",
      component: React.lazy(() => import("@/registry/Menu/with-sections")),
      file: "registry/Menu/with-sections.tsx"
    },
  },
  "Meter": {
    "default": {
      name: "Meter-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Meter/default")),
      file: "registry/Meter/default.tsx"
    },
  },
  "Modal": {
    "default": {
      name: "Modal-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Modal/default")),
      file: "registry/Modal/default.tsx"
    },
    "dismissable-false": {
      name: "Modal-dismissable-false",
      story: "dismissable-false",
      component: React.lazy(() => import("@/registry/Modal/dismissable-false")),
      file: "registry/Modal/dismissable-false.tsx"
    },
    "set-autofocus": {
      name: "Modal-set-autofocus",
      story: "set-autofocus",
      component: React.lazy(() => import("@/registry/Modal/set-autofocus")),
      file: "registry/Modal/set-autofocus.tsx"
    },
    "sizes": {
      name: "Modal-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/Modal/sizes")),
      file: "registry/Modal/sizes.tsx"
    },
  },
  "NumberField": {
    "default": {
      name: "NumberField-default",
      story: "default",
      component: React.lazy(() => import("@/registry/NumberField/default")),
      file: "registry/NumberField/default.tsx"
    },
    "with-mobile-stepper": {
      name: "NumberField-with-mobile-stepper",
      story: "with-mobile-stepper",
      component: React.lazy(() => import("@/registry/NumberField/with-mobile-stepper")),
      file: "registry/NumberField/with-mobile-stepper.tsx"
    },
    "with-stepper": {
      name: "NumberField-with-stepper",
      story: "with-stepper",
      component: React.lazy(() => import("@/registry/NumberField/with-stepper")),
      file: "registry/NumberField/with-stepper.tsx"
    },
  },
  "ProgressBar": {
    "default": {
      name: "ProgressBar-default",
      story: "default",
      component: React.lazy(() => import("@/registry/ProgressBar/default")),
      file: "registry/ProgressBar/default.tsx"
    },
  },
  "Radio": {
    "default": {
      name: "Radio-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Radio/default")),
      file: "registry/Radio/default.tsx"
    },
    "sizes": {
      name: "Radio-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/Radio/sizes")),
      file: "registry/Radio/sizes.tsx"
    },
  },
  "RadioGroup": {
    "default": {
      name: "RadioGroup-default",
      story: "default",
      component: React.lazy(() => import("@/registry/RadioGroup/default")),
      file: "registry/RadioGroup/default.tsx"
    },
    "horizontal": {
      name: "RadioGroup-horizontal",
      story: "horizontal",
      component: React.lazy(() => import("@/registry/RadioGroup/horizontal")),
      file: "registry/RadioGroup/horizontal.tsx"
    },
  },
  "RangeCalendar": {
    "default": {
      name: "RangeCalendar-default",
      story: "default",
      component: React.lazy(() => import("@/registry/RangeCalendar/default")),
      file: "registry/RangeCalendar/default.tsx"
    },
  },
  "SearchField": {
    "default": {
      name: "SearchField-default",
      story: "default",
      component: React.lazy(() => import("@/registry/SearchField/default")),
      file: "registry/SearchField/default.tsx"
    },
    "with-clear-button": {
      name: "SearchField-with-clear-button",
      story: "with-clear-button",
      component: React.lazy(() => import("@/registry/SearchField/with-clear-button")),
      file: "registry/SearchField/with-clear-button.tsx"
    },
  },
  "Select": {
    "default": {
      name: "Select-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Select/default")),
      file: "registry/Select/default.tsx"
    },
  },
  "Slider": {
    "default": {
      name: "Slider-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Slider/default")),
      file: "registry/Slider/default.tsx"
    },
    "vertical": {
      name: "Slider-vertical",
      story: "vertical",
      component: React.lazy(() => import("@/registry/Slider/vertical")),
      file: "registry/Slider/vertical.tsx"
    },
  },
  "Switch": {
    "alignment": {
      name: "Switch-alignment",
      story: "alignment",
      component: React.lazy(() => import("@/registry/Switch/alignment")),
      file: "registry/Switch/alignment.tsx"
    },
    "default": {
      name: "Switch-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Switch/default")),
      file: "registry/Switch/default.tsx"
    },
    "disabled": {
      name: "Switch-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/Switch/disabled")),
      file: "registry/Switch/disabled.tsx"
    },
    "sizes": {
      name: "Switch-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/Switch/sizes")),
      file: "registry/Switch/sizes.tsx"
    },
  },
  "Tabs": {
    "default": {
      name: "Tabs-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Tabs/default")),
      file: "registry/Tabs/default.tsx"
    },
    "vertical": {
      name: "Tabs-vertical",
      story: "vertical",
      component: React.lazy(() => import("@/registry/Tabs/vertical")),
      file: "registry/Tabs/vertical.tsx"
    },
  },
  "TextField": {
    "default": {
      name: "TextField-default",
      story: "default",
      component: React.lazy(() => import("@/registry/TextField/default")),
      file: "registry/TextField/default.tsx"
    },
    "with-error": {
      name: "TextField-with-error",
      story: "with-error",
      component: React.lazy(() => import("@/registry/TextField/with-error")),
      file: "registry/TextField/with-error.tsx"
    },
  },
  "Tooltip": {
    "default": {
      name: "Tooltip-default",
      story: "default",
      component: React.lazy(() => import("@/registry/Tooltip/default")),
      file: "registry/Tooltip/default.tsx"
    },
    "placement": {
      name: "Tooltip-placement",
      story: "placement",
      component: React.lazy(() => import("@/registry/Tooltip/placement")),
      file: "registry/Tooltip/placement.tsx"
    },
  },
};
