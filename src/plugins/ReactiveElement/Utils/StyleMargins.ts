import { StringMethods } from "./StringMethods";

let margins = /*css*/`
  .mb-1 {
    margin-bottom: 0.0625rem !important;
  }

  .ml-1 {
    margin-left: 0.0625rem !important;
  }

  .mt-1 {
    margin-top: 0.0625rem !important;
  }

  .mr-1 {
    margin-right: 0.0625rem !important;
  }

  .mb-2 {
    margin-bottom: 0.125rem !important;
  }

  .ml-2 {
    margin-left: 0.125rem !important;
  }

  .mt-2 {
    margin-top: 0.125rem !important;
  }

  .mr-2 {
    margin-right: 0.125rem !important;
  }

  .mb-3 {
    margin-bottom: 0.1875rem !important;
  }

  .ml-3 {
    margin-left: 0.1875rem !important;
  }

  .mt-3 {
    margin-top: 0.1875rem !important;
  }

  .mr-3 {
    margin-right: 0.1875rem !important;
  }

  .mb-4 {
    margin-bottom: 0.25rem !important;
  }

  .ml-4 {
    margin-left: 0.25rem !important;
  }

  .mt-4 {
    margin-top: 0.25rem !important;
  }

  .mr-4 {
    margin-right: 0.25rem !important;
  }

  .mb-5 {
    margin-bottom: 0.3125rem !important;
  }

  .ml-5 {
    margin-left: 0.3125rem !important;
  }

  .mt-5 {
    margin-top: 0.3125rem !important;
  }

  .mr-5 {
    margin-right: 0.3125rem !important;
  }

  .mb-6 {
    margin-bottom: 0.375rem !important;
  }

  .ml-6 {
    margin-left: 0.375rem !important;
  }

  .mt-6 {
    margin-top: 0.375rem !important;
  }

  .mr-6 {
    margin-right: 0.375rem !important;
  }

  .mb-7 {
    margin-bottom: 0.4375rem !important;
  }

  .ml-7 {
    margin-left: 0.4375rem !important;
  }

  .mt-7 {
    margin-top: 0.4375rem !important;
  }

  .mr-7 {
    margin-right: 0.4375rem !important;
  }

  .mb-8 {
    margin-bottom: 0.5rem !important;
  }

  .ml-8 {
    margin-left: 0.5rem !important;
  }

  .mt-8 {
    margin-top: 0.5rem !important;
  }

  .mr-8 {
    margin-right: 0.5rem !important;
  }

  .mb-9 {
    margin-bottom: 0.5625rem !important;
  }

  .ml-9 {
    margin-left: 0.5625rem !important;
  }

  .mt-9 {
    margin-top: 0.5625rem !important;
  }

  .mr-9 {
    margin-right: 0.5625rem !important;
  }

  .mb-10 {
    margin-bottom: 0.625rem !important;
  }

  .ml-10 {
    margin-left: 0.625rem !important;
  }

  .mt-10 {
    margin-top: 0.625rem !important;
  }

  .mr-10 {
    margin-right: 0.625rem !important;
  }

  .mb-11 {
    margin-bottom: 0.6875rem !important;
  }

  .ml-11 {
    margin-left: 0.6875rem !important;
  }

  .mt-11 {
    margin-top: 0.6875rem !important;
  }

  .mr-11 {
    margin-right: 0.6875rem !important;
  }

  .mb-12 {
    margin-bottom: 0.75rem !important;
  }

  .ml-12 {
    margin-left: 0.75rem !important;
  }

  .mt-12 {
    margin-top: 0.75rem !important;
  }

  .mr-12 {
    margin-right: 0.75rem !important;
  }

  .mb-13 {
    margin-bottom: 0.8125rem !important;
  }

  .ml-13 {
    margin-left: 0.8125rem !important;
  }

  .mt-13 {
    margin-top: 0.8125rem !important;
  }

  .mr-13 {
    margin-right: 0.8125rem !important;
  }

  .mb-14 {
    margin-bottom: 0.875rem !important;
  }

  .ml-14 {
    margin-left: 0.875rem !important;
  }

  .mt-14 {
    margin-top: 0.875rem !important;
  }

  .mr-14 {
    margin-right: 0.875rem !important;
  }

  .mb-15 {
    margin-bottom: 0.9375rem !important;
  }

  .ml-15 {
    margin-left: 0.9375rem !important;
  }

  .mt-15 {
    margin-top: 0.9375rem !important;
  }

  .mr-15 {
    margin-right: 0.9375rem !important;
  }

  .mb-16 {
    margin-bottom: 1rem !important;
  }

  .ml-16 {
    margin-left: 1rem !important;
  }

  .mt-16 {
    margin-top: 1rem !important;
  }

  .mr-16 {
    margin-right: 1rem !important;
  }

  .mb-17 {
    margin-bottom: 1.0625rem !important;
  }

  .ml-17 {
    margin-left: 1.0625rem !important;
  }

  .mt-17 {
    margin-top: 1.0625rem !important;
  }

  .mr-17 {
    margin-right: 1.0625rem !important;
  }

  .mb-18 {
    margin-bottom: 1.125rem !important;
  }

  .ml-18 {
    margin-left: 1.125rem !important;
  }

  .mt-18 {
    margin-top: 1.125rem !important;
  }

  .mr-18 {
    margin-right: 1.125rem !important;
  }

  .mb-19 {
    margin-bottom: 1.1875rem !important;
  }

  .ml-19 {
    margin-left: 1.1875rem !important;
  }

  .mt-19 {
    margin-top: 1.1875rem !important;
  }

  .mr-19 {
    margin-right: 1.1875rem !important;
  }

  .mb-20 {
    margin-bottom: 1.25rem !important;
  }

  .ml-20 {
    margin-left: 1.25rem !important;
  }

  .mt-20 {
    margin-top: 1.25rem !important;
  }

  .mr-20 {
    margin-right: 1.25rem !important;
  }

  .mb-21 {
    margin-bottom: 1.3125rem !important;
  }

  .ml-21 {
    margin-left: 1.3125rem !important;
  }

  .mt-21 {
    margin-top: 1.3125rem !important;
  }

  .mr-21 {
    margin-right: 1.3125rem !important;
  }

  .mb-22 {
    margin-bottom: 1.375rem !important;
  }

  .ml-22 {
    margin-left: 1.375rem !important;
  }

  .mt-22 {
    margin-top: 1.375rem !important;
  }

  .mr-22 {
    margin-right: 1.375rem !important;
  }

  .mb-23 {
    margin-bottom: 1.4375rem !important;
  }

  .ml-23 {
    margin-left: 1.4375rem !important;
  }

  .mt-23 {
    margin-top: 1.4375rem !important;
  }

  .mr-23 {
    margin-right: 1.4375rem !important;
  }

  .mb-24 {
    margin-bottom: 1.5rem !important;
  }

  .ml-24 {
    margin-left: 1.5rem !important;
  }

  .mt-24 {
    margin-top: 1.5rem !important;
  }

  .mr-24 {
    margin-right: 1.5rem !important;
  }

  .mb-25 {
    margin-bottom: 1.5625rem !important;
  }

  .ml-25 {
    margin-left: 1.5625rem !important;
  }

  .mt-25 {
    margin-top: 1.5625rem !important;
  }

  .mr-25 {
    margin-right: 1.5625rem !important;
  }

  .mb-26 {
    margin-bottom: 1.625rem !important;
  }

  .ml-26 {
    margin-left: 1.625rem !important;
  }

  .mt-26 {
    margin-top: 1.625rem !important;
  }

  .mr-26 {
    margin-right: 1.625rem !important;
  }

  .mb-27 {
    margin-bottom: 1.6875rem !important;
  }

  .ml-27 {
    margin-left: 1.6875rem !important;
  }

  .mt-27 {
    margin-top: 1.6875rem !important;
  }

  .mr-27 {
    margin-right: 1.6875rem !important;
  }

  .mb-28 {
    margin-bottom: 1.75rem !important;
  }

  .ml-28 {
    margin-left: 1.75rem !important;
  }

  .mt-28 {
    margin-top: 1.75rem !important;
  }

  .mr-28 {
    margin-right: 1.75rem !important;
  }

  .mb-29 {
    margin-bottom: 1.8125rem !important;
  }

  .ml-29 {
    margin-left: 1.8125rem !important;
  }

  .mt-29 {
    margin-top: 1.8125rem !important;
  }

  .mr-29 {
    margin-right: 1.8125rem !important;
  }

  .mb-30 {
    margin-bottom: 1.875rem !important;
  }

  .ml-30 {
    margin-left: 1.875rem !important;
  }

  .mt-30 {
    margin-top: 1.875rem !important;
  }

  .mr-30 {
    margin-right: 1.875rem !important;
  }

  .mb-31 {
    margin-bottom: 1.9375rem !important;
  }

  .ml-31 {
    margin-left: 1.9375rem !important;
  }

  .mt-31 {
    margin-top: 1.9375rem !important;
  }

  .mr-31 {
    margin-right: 1.9375rem !important;
  }

  .mb-32 {
    margin-bottom: 2rem !important;
  }

  .ml-32 {
    margin-left: 2rem !important;
  }

  .mt-32 {
    margin-top: 2rem !important;
  }

  .mr-32 {
    margin-right: 2rem !important;
  }

  .mb-33 {
    margin-bottom: 2.0625rem !important;
  }

  .ml-33 {
    margin-left: 2.0625rem !important;
  }

  .mt-33 {
    margin-top: 2.0625rem !important;
  }

  .mr-33 {
    margin-right: 2.0625rem !important;
  }

  .mb-34 {
    margin-bottom: 2.125rem !important;
  }

  .ml-34 {
    margin-left: 2.125rem !important;
  }

  .mt-34 {
    margin-top: 2.125rem !important;
  }

  .mr-34 {
    margin-right: 2.125rem !important;
  }

  .mb-35 {
    margin-bottom: 2.1875rem !important;
  }

  .ml-35 {
    margin-left: 2.1875rem !important;
  }

  .mt-35 {
    margin-top: 2.1875rem !important;
  }

  .mr-35 {
    margin-right: 2.1875rem !important;
  }

  .mb-36 {
    margin-bottom: 2.25rem !important;
  }

  .ml-36 {
    margin-left: 2.25rem !important;
  }

  .mt-36 {
    margin-top: 2.25rem !important;
  }

  .mr-36 {
    margin-right: 2.25rem !important;
  }

  .mb-37 {
    margin-bottom: 2.3125rem !important;
  }

  .ml-37 {
    margin-left: 2.3125rem !important;
  }

  .mt-37 {
    margin-top: 2.3125rem !important;
  }

  .mr-37 {
    margin-right: 2.3125rem !important;
  }

  .mb-38 {
    margin-bottom: 2.375rem !important;
  }

  .ml-38 {
    margin-left: 2.375rem !important;
  }

  .mt-38 {
    margin-top: 2.375rem !important;
  }

  .mr-38 {
    margin-right: 2.375rem !important;
  }

  .mb-39 {
    margin-bottom: 2.4375rem !important;
  }

  .ml-39 {
    margin-left: 2.4375rem !important;
  }

  .mt-39 {
    margin-top: 2.4375rem !important;
  }

  .mr-39 {
    margin-right: 2.4375rem !important;
  }

  .mb-40 {
    margin-bottom: 2.5rem !important;
  }

  .ml-40 {
    margin-left: 2.5rem !important;
  }

  .mt-40 {
    margin-top: 2.5rem !important;
  }

  .mr-40 {
    margin-right: 2.5rem !important;
  }

  .mb-41 {
    margin-bottom: 2.5625rem !important;
  }

  .ml-41 {
    margin-left: 2.5625rem !important;
  }

  .mt-41 {
    margin-top: 2.5625rem !important;
  }

  .mr-41 {
    margin-right: 2.5625rem !important;
  }

  .mb-42 {
    margin-bottom: 2.625rem !important;
  }

  .ml-42 {
    margin-left: 2.625rem !important;
  }

  .mt-42 {
    margin-top: 2.625rem !important;
  }

  .mr-42 {
    margin-right: 2.625rem !important;
  }

  .mb-43 {
    margin-bottom: 2.6875rem !important;
  }

  .ml-43 {
    margin-left: 2.6875rem !important;
  }

  .mt-43 {
    margin-top: 2.6875rem !important;
  }

  .mr-43 {
    margin-right: 2.6875rem !important;
  }

  .mb-44 {
    margin-bottom: 2.75rem !important;
  }

  .ml-44 {
    margin-left: 2.75rem !important;
  }

  .mt-44 {
    margin-top: 2.75rem !important;
  }

  .mr-44 {
    margin-right: 2.75rem !important;
  }

  .mb-45 {
    margin-bottom: 2.8125rem !important;
  }

  .ml-45 {
    margin-left: 2.8125rem !important;
  }

  .mt-45 {
    margin-top: 2.8125rem !important;
  }

  .mr-45 {
    margin-right: 2.8125rem !important;
  }

  .mb-46 {
    margin-bottom: 2.875rem !important;
  }

  .ml-46 {
    margin-left: 2.875rem !important;
  }

  .mt-46 {
    margin-top: 2.875rem !important;
  }

  .mr-46 {
    margin-right: 2.875rem !important;
  }

  .mb-47 {
    margin-bottom: 2.9375rem !important;
  }

  .ml-47 {
    margin-left: 2.9375rem !important;
  }

  .mt-47 {
    margin-top: 2.9375rem !important;
  }

  .mr-47 {
    margin-right: 2.9375rem !important;
  }

  .mb-48 {
    margin-bottom: 3rem !important;
  }

  .ml-48 {
    margin-left: 3rem !important;
  }

  .mt-48 {
    margin-top: 3rem !important;
  }

  .mr-48 {
    margin-right: 3rem !important;
  }

  .mb-49 {
    margin-bottom: 3.0625rem !important;
  }

  .ml-49 {
    margin-left: 3.0625rem !important;
  }

  .mt-49 {
    margin-top: 3.0625rem !important;
  }

  .mr-49 {
    margin-right: 3.0625rem !important;
  }

  .mb-50 {
    margin-bottom: 3.125rem !important;
  }

  .ml-50 {
    margin-left: 3.125rem !important;
  }

  .mt-50 {
    margin-top: 3.125rem !important;
  }

  .mr-50 {
    margin-right: 3.125rem !important;
  }

  .mb-51 {
    margin-bottom: 3.1875rem !important;
  }

  .ml-51 {
    margin-left: 3.1875rem !important;
  }

  .mt-51 {
    margin-top: 3.1875rem !important;
  }

  .mr-51 {
    margin-right: 3.1875rem !important;
  }

  .mb-52 {
    margin-bottom: 3.25rem !important;
  }

  .ml-52 {
    margin-left: 3.25rem !important;
  }

  .mt-52 {
    margin-top: 3.25rem !important;
  }

  .mr-52 {
    margin-right: 3.25rem !important;
  }

  .mb-53 {
    margin-bottom: 3.3125rem !important;
  }

  .ml-53 {
    margin-left: 3.3125rem !important;
  }

  .mt-53 {
    margin-top: 3.3125rem !important;
  }

  .mr-53 {
    margin-right: 3.3125rem !important;
  }

  .mb-54 {
    margin-bottom: 3.375rem !important;
  }

  .ml-54 {
    margin-left: 3.375rem !important;
  }

  .mt-54 {
    margin-top: 3.375rem !important;
  }

  .mr-54 {
    margin-right: 3.375rem !important;
  }

  .mb-55 {
    margin-bottom: 3.4375rem !important;
  }

  .ml-55 {
    margin-left: 3.4375rem !important;
  }

  .mt-55 {
    margin-top: 3.4375rem !important;
  }

  .mr-55 {
    margin-right: 3.4375rem !important;
  }

  .mb-56 {
    margin-bottom: 3.5rem !important;
  }

  .ml-56 {
    margin-left: 3.5rem !important;
  }

  .mt-56 {
    margin-top: 3.5rem !important;
  }

  .mr-56 {
    margin-right: 3.5rem !important;
  }

  .mb-57 {
    margin-bottom: 3.5625rem !important;
  }

  .ml-57 {
    margin-left: 3.5625rem !important;
  }

  .mt-57 {
    margin-top: 3.5625rem !important;
  }

  .mr-57 {
    margin-right: 3.5625rem !important;
  }

  .mb-58 {
    margin-bottom: 3.625rem !important;
  }

  .ml-58 {
    margin-left: 3.625rem !important;
  }

  .mt-58 {
    margin-top: 3.625rem !important;
  }

  .mr-58 {
    margin-right: 3.625rem !important;
  }

  .mb-59 {
    margin-bottom: 3.6875rem !important;
  }

  .ml-59 {
    margin-left: 3.6875rem !important;
  }

  .mt-59 {
    margin-top: 3.6875rem !important;
  }

  .mr-59 {
    margin-right: 3.6875rem !important;
  }

  .mb-60 {
    margin-bottom: 3.75rem !important;
  }

  .ml-60 {
    margin-left: 3.75rem !important;
  }

  .mt-60 {
    margin-top: 3.75rem !important;
  }

  .mr-60 {
    margin-right: 3.75rem !important;
  }

  .mb-61 {
    margin-bottom: 3.8125rem !important;
  }

  .ml-61 {
    margin-left: 3.8125rem !important;
  }

  .mt-61 {
    margin-top: 3.8125rem !important;
  }

  .mr-61 {
    margin-right: 3.8125rem !important;
  }

  .mb-62 {
    margin-bottom: 3.875rem !important;
  }

  .ml-62 {
    margin-left: 3.875rem !important;
  }

  .mt-62 {
    margin-top: 3.875rem !important;
  }

  .mr-62 {
    margin-right: 3.875rem !important;
  }

  .mb-63 {
    margin-bottom: 3.9375rem !important;
  }

  .ml-63 {
    margin-left: 3.9375rem !important;
  }

  .mt-63 {
    margin-top: 3.9375rem !important;
  }

  .mr-63 {
    margin-right: 3.9375rem !important;
  }

  .mb-64 {
    margin-bottom: 4rem !important;
  }

  .ml-64 {
    margin-left: 4rem !important;
  }

  .mt-64 {
    margin-top: 4rem !important;
  }

  .mr-64 {
    margin-right: 4rem !important;
  }

  .mb-65 {
    margin-bottom: 4.0625rem !important;
  }

  .ml-65 {
    margin-left: 4.0625rem !important;
  }

  .mt-65 {
    margin-top: 4.0625rem !important;
  }

  .mr-65 {
    margin-right: 4.0625rem !important;
  }

  .mb-66 {
    margin-bottom: 4.125rem !important;
  }

  .ml-66 {
    margin-left: 4.125rem !important;
  }

  .mt-66 {
    margin-top: 4.125rem !important;
  }

  .mr-66 {
    margin-right: 4.125rem !important;
  }

  .mb-67 {
    margin-bottom: 4.1875rem !important;
  }

  .ml-67 {
    margin-left: 4.1875rem !important;
  }

  .mt-67 {
    margin-top: 4.1875rem !important;
  }

  .mr-67 {
    margin-right: 4.1875rem !important;
  }

  .mb-68 {
    margin-bottom: 4.25rem !important;
  }

  .ml-68 {
    margin-left: 4.25rem !important;
  }

  .mt-68 {
    margin-top: 4.25rem !important;
  }

  .mr-68 {
    margin-right: 4.25rem !important;
  }

  .mb-69 {
    margin-bottom: 4.3125rem !important;
  }

  .ml-69 {
    margin-left: 4.3125rem !important;
  }

  .mt-69 {
    margin-top: 4.3125rem !important;
  }

  .mr-69 {
    margin-right: 4.3125rem !important;
  }

  .mb-70 {
    margin-bottom: 4.375rem !important;
  }

  .ml-70 {
    margin-left: 4.375rem !important;
  }

  .mt-70 {
    margin-top: 4.375rem !important;
  }

  .mr-70 {
    margin-right: 4.375rem !important;
  }

  .mb-71 {
    margin-bottom: 4.4375rem !important;
  }

  .ml-71 {
    margin-left: 4.4375rem !important;
  }

  .mt-71 {
    margin-top: 4.4375rem !important;
  }

  .mr-71 {
    margin-right: 4.4375rem !important;
  }

  .mb-72 {
    margin-bottom: 4.5rem !important;
  }

  .ml-72 {
    margin-left: 4.5rem !important;
  }

  .mt-72 {
    margin-top: 4.5rem !important;
  }

  .mr-72 {
    margin-right: 4.5rem !important;
  }

  .mb-73 {
    margin-bottom: 4.5625rem !important;
  }

  .ml-73 {
    margin-left: 4.5625rem !important;
  }

  .mt-73 {
    margin-top: 4.5625rem !important;
  }

  .mr-73 {
    margin-right: 4.5625rem !important;
  }

  .mb-74 {
    margin-bottom: 4.625rem !important;
  }

  .ml-74 {
    margin-left: 4.625rem !important;
  }

  .mt-74 {
    margin-top: 4.625rem !important;
  }

  .mr-74 {
    margin-right: 4.625rem !important;
  }

  .mb-75 {
    margin-bottom: 4.6875rem !important;
  }

  .ml-75 {
    margin-left: 4.6875rem !important;
  }

  .mt-75 {
    margin-top: 4.6875rem !important;
  }

  .mr-75 {
    margin-right: 4.6875rem !important;
  }

  .mb-76 {
    margin-bottom: 4.75rem !important;
  }

  .ml-76 {
    margin-left: 4.75rem !important;
  }

  .mt-76 {
    margin-top: 4.75rem !important;
  }

  .mr-76 {
    margin-right: 4.75rem !important;
  }

  .mb-77 {
    margin-bottom: 4.8125rem !important;
  }

  .ml-77 {
    margin-left: 4.8125rem !important;
  }

  .mt-77 {
    margin-top: 4.8125rem !important;
  }

  .mr-77 {
    margin-right: 4.8125rem !important;
  }

  .mb-78 {
    margin-bottom: 4.875rem !important;
  }

  .ml-78 {
    margin-left: 4.875rem !important;
  }

  .mt-78 {
    margin-top: 4.875rem !important;
  }

  .mr-78 {
    margin-right: 4.875rem !important;
  }

  .mb-79 {
    margin-bottom: 4.9375rem !important;
  }

  .ml-79 {
    margin-left: 4.9375rem !important;
  }

  .mt-79 {
    margin-top: 4.9375rem !important;
  }

  .mr-79 {
    margin-right: 4.9375rem !important;
  }

  .mb-80 {
    margin-bottom: 5rem !important;
  }

  .ml-80 {
    margin-left: 5rem !important;
  }

  .mt-80 {
    margin-top: 5rem !important;
  }

  .mr-80 {
    margin-right: 5rem !important;
  }

  .mb-81 {
    margin-bottom: 5.0625rem !important;
  }

  .ml-81 {
    margin-left: 5.0625rem !important;
  }

  .mt-81 {
    margin-top: 5.0625rem !important;
  }

  .mr-81 {
    margin-right: 5.0625rem !important;
  }

  .mb-82 {
    margin-bottom: 5.125rem !important;
  }

  .ml-82 {
    margin-left: 5.125rem !important;
  }

  .mt-82 {
    margin-top: 5.125rem !important;
  }

  .mr-82 {
    margin-right: 5.125rem !important;
  }

  .mb-83 {
    margin-bottom: 5.1875rem !important;
  }

  .ml-83 {
    margin-left: 5.1875rem !important;
  }

  .mt-83 {
    margin-top: 5.1875rem !important;
  }

  .mr-83 {
    margin-right: 5.1875rem !important;
  }

  .mb-84 {
    margin-bottom: 5.25rem !important;
  }

  .ml-84 {
    margin-left: 5.25rem !important;
  }

  .mt-84 {
    margin-top: 5.25rem !important;
  }

  .mr-84 {
    margin-right: 5.25rem !important;
  }

  .mb-85 {
    margin-bottom: 5.3125rem !important;
  }

  .ml-85 {
    margin-left: 5.3125rem !important;
  }

  .mt-85 {
    margin-top: 5.3125rem !important;
  }

  .mr-85 {
    margin-right: 5.3125rem !important;
  }

  .mb-86 {
    margin-bottom: 5.375rem !important;
  }

  .ml-86 {
    margin-left: 5.375rem !important;
  }

  .mt-86 {
    margin-top: 5.375rem !important;
  }

  .mr-86 {
    margin-right: 5.375rem !important;
  }

  .mb-87 {
    margin-bottom: 5.4375rem !important;
  }

  .ml-87 {
    margin-left: 5.4375rem !important;
  }

  .mt-87 {
    margin-top: 5.4375rem !important;
  }

  .mr-87 {
    margin-right: 5.4375rem !important;
  }

  .mb-88 {
    margin-bottom: 5.5rem !important;
  }

  .ml-88 {
    margin-left: 5.5rem !important;
  }

  .mt-88 {
    margin-top: 5.5rem !important;
  }

  .mr-88 {
    margin-right: 5.5rem !important;
  }

  .mb-89 {
    margin-bottom: 5.5625rem !important;
  }

  .ml-89 {
    margin-left: 5.5625rem !important;
  }

  .mt-89 {
    margin-top: 5.5625rem !important;
  }

  .mr-89 {
    margin-right: 5.5625rem !important;
  }

  .mb-90 {
    margin-bottom: 5.625rem !important;
  }

  .ml-90 {
    margin-left: 5.625rem !important;
  }

  .mt-90 {
    margin-top: 5.625rem !important;
  }

  .mr-90 {
    margin-right: 5.625rem !important;
  }

  .mb-91 {
    margin-bottom: 5.6875rem !important;
  }

  .ml-91 {
    margin-left: 5.6875rem !important;
  }

  .mt-91 {
    margin-top: 5.6875rem !important;
  }

  .mr-91 {
    margin-right: 5.6875rem !important;
  }

  .mb-92 {
    margin-bottom: 5.75rem !important;
  }

  .ml-92 {
    margin-left: 5.75rem !important;
  }

  .mt-92 {
    margin-top: 5.75rem !important;
  }

  .mr-92 {
    margin-right: 5.75rem !important;
  }

  .mb-93 {
    margin-bottom: 5.8125rem !important;
  }

  .ml-93 {
    margin-left: 5.8125rem !important;
  }

  .mt-93 {
    margin-top: 5.8125rem !important;
  }

  .mr-93 {
    margin-right: 5.8125rem !important;
  }

  .mb-94 {
    margin-bottom: 5.875rem !important;
  }

  .ml-94 {
    margin-left: 5.875rem !important;
  }

  .mt-94 {
    margin-top: 5.875rem !important;
  }

  .mr-94 {
    margin-right: 5.875rem !important;
  }

  .mb-95 {
    margin-bottom: 5.9375rem !important;
  }

  .ml-95 {
    margin-left: 5.9375rem !important;
  }

  .mt-95 {
    margin-top: 5.9375rem !important;
  }

  .mr-95 {
    margin-right: 5.9375rem !important;
  }

  .mb-96 {
    margin-bottom: 6rem !important;
  }

  .ml-96 {
    margin-left: 6rem !important;
  }

  .mt-96 {
    margin-top: 6rem !important;
  }

  .mr-96 {
    margin-right: 6rem !important;
  }

  .mb-97 {
    margin-bottom: 6.0625rem !important;
  }

  .ml-97 {
    margin-left: 6.0625rem !important;
  }

  .mt-97 {
    margin-top: 6.0625rem !important;
  }

  .mr-97 {
    margin-right: 6.0625rem !important;
  }

  .mb-98 {
    margin-bottom: 6.125rem !important;
  }

  .ml-98 {
    margin-left: 6.125rem !important;
  }

  .mt-98 {
    margin-top: 6.125rem !important;
  }

  .mr-98 {
    margin-right: 6.125rem !important;
  }

  .mb-99 {
    margin-bottom: 6.1875rem !important;
  }

  .ml-99 {
    margin-left: 6.1875rem !important;
  }

  .mt-99 {
    margin-top: 6.1875rem !important;
  }

  .mr-99 {
    margin-right: 6.1875rem !important;
  }

  .mb-100 {
    margin-bottom: 6.25rem !important;
  }

  .ml-100 {
    margin-left: 6.25rem !important;
  }

  .mt-100 {
    margin-top: 6.25rem !important;
  }

  .mr-100 {
    margin-right: 6.25rem !important;
  }

  .mb-101 {
    margin-bottom: 6.3125rem !important;
  }

  .ml-101 {
    margin-left: 6.3125rem !important;
  }

  .mt-101 {
    margin-top: 6.3125rem !important;
  }

  .mr-101 {
    margin-right: 6.3125rem !important;
  }

  .mb-102 {
    margin-bottom: 6.375rem !important;
  }

  .ml-102 {
    margin-left: 6.375rem !important;
  }

  .mt-102 {
    margin-top: 6.375rem !important;
  }

  .mr-102 {
    margin-right: 6.375rem !important;
  }

  .mb-103 {
    margin-bottom: 6.4375rem !important;
  }

  .ml-103 {
    margin-left: 6.4375rem !important;
  }

  .mt-103 {
    margin-top: 6.4375rem !important;
  }

  .mr-103 {
    margin-right: 6.4375rem !important;
  }

  .mb-104 {
    margin-bottom: 6.5rem !important;
  }

  .ml-104 {
    margin-left: 6.5rem !important;
  }

  .mt-104 {
    margin-top: 6.5rem !important;
  }

  .mr-104 {
    margin-right: 6.5rem !important;
  }

  .mb-105 {
    margin-bottom: 6.5625rem !important;
  }

  .ml-105 {
    margin-left: 6.5625rem !important;
  }

  .mt-105 {
    margin-top: 6.5625rem !important;
  }

  .mr-105 {
    margin-right: 6.5625rem !important;
  }

  .mb-106 {
    margin-bottom: 6.625rem !important;
  }

  .ml-106 {
    margin-left: 6.625rem !important;
  }

  .mt-106 {
    margin-top: 6.625rem !important;
  }

  .mr-106 {
    margin-right: 6.625rem !important;
  }

  .mb-107 {
    margin-bottom: 6.6875rem !important;
  }

  .ml-107 {
    margin-left: 6.6875rem !important;
  }

  .mt-107 {
    margin-top: 6.6875rem !important;
  }

  .mr-107 {
    margin-right: 6.6875rem !important;
  }

  .mb-108 {
    margin-bottom: 6.75rem !important;
  }

  .ml-108 {
    margin-left: 6.75rem !important;
  }

  .mt-108 {
    margin-top: 6.75rem !important;
  }

  .mr-108 {
    margin-right: 6.75rem !important;
  }

  .mb-109 {
    margin-bottom: 6.8125rem !important;
  }

  .ml-109 {
    margin-left: 6.8125rem !important;
  }

  .mt-109 {
    margin-top: 6.8125rem !important;
  }

  .mr-109 {
    margin-right: 6.8125rem !important;
  }

  .mb-110 {
    margin-bottom: 6.875rem !important;
  }

  .ml-110 {
    margin-left: 6.875rem !important;
  }

  .mt-110 {
    margin-top: 6.875rem !important;
  }

  .mr-110 {
    margin-right: 6.875rem !important;
  }

  .mb-111 {
    margin-bottom: 6.9375rem !important;
  }

  .ml-111 {
    margin-left: 6.9375rem !important;
  }

  .mt-111 {
    margin-top: 6.9375rem !important;
  }

  .mr-111 {
    margin-right: 6.9375rem !important;
  }

  .mb-112 {
    margin-bottom: 7rem !important;
  }

  .ml-112 {
    margin-left: 7rem !important;
  }

  .mt-112 {
    margin-top: 7rem !important;
  }

  .mr-112 {
    margin-right: 7rem !important;
  }

  .mb-113 {
    margin-bottom: 7.0625rem !important;
  }

  .ml-113 {
    margin-left: 7.0625rem !important;
  }

  .mt-113 {
    margin-top: 7.0625rem !important;
  }

  .mr-113 {
    margin-right: 7.0625rem !important;
  }

  .mb-114 {
    margin-bottom: 7.125rem !important;
  }

  .ml-114 {
    margin-left: 7.125rem !important;
  }

  .mt-114 {
    margin-top: 7.125rem !important;
  }

  .mr-114 {
    margin-right: 7.125rem !important;
  }

  .mb-115 {
    margin-bottom: 7.1875rem !important;
  }

  .ml-115 {
    margin-left: 7.1875rem !important;
  }

  .mt-115 {
    margin-top: 7.1875rem !important;
  }

  .mr-115 {
    margin-right: 7.1875rem !important;
  }

  .mb-116 {
    margin-bottom: 7.25rem !important;
  }

  .ml-116 {
    margin-left: 7.25rem !important;
  }

  .mt-116 {
    margin-top: 7.25rem !important;
  }

  .mr-116 {
    margin-right: 7.25rem !important;
  }

  .mb-117 {
    margin-bottom: 7.3125rem !important;
  }

  .ml-117 {
    margin-left: 7.3125rem !important;
  }

  .mt-117 {
    margin-top: 7.3125rem !important;
  }

  .mr-117 {
    margin-right: 7.3125rem !important;
  }

  .mb-118 {
    margin-bottom: 7.375rem !important;
  }

  .ml-118 {
    margin-left: 7.375rem !important;
  }

  .mt-118 {
    margin-top: 7.375rem !important;
  }

  .mr-118 {
    margin-right: 7.375rem !important;
  }

  .mb-119 {
    margin-bottom: 7.4375rem !important;
  }

  .ml-119 {
    margin-left: 7.4375rem !important;
  }

  .mt-119 {
    margin-top: 7.4375rem !important;
  }

  .mr-119 {
    margin-right: 7.4375rem !important;
  }

  .mb-120 {
    margin-bottom: 7.5rem !important;
  }

  .ml-120 {
    margin-left: 7.5rem !important;
  }

  .mt-120 {
    margin-top: 7.5rem !important;
  }

  .mr-120 {
    margin-right: 7.5rem !important;
  }

  .mb-121 {
    margin-bottom: 7.5625rem !important;
  }

  .ml-121 {
    margin-left: 7.5625rem !important;
  }

  .mt-121 {
    margin-top: 7.5625rem !important;
  }

  .mr-121 {
    margin-right: 7.5625rem !important;
  }

  .mb-122 {
    margin-bottom: 7.625rem !important;
  }

  .ml-122 {
    margin-left: 7.625rem !important;
  }

  .mt-122 {
    margin-top: 7.625rem !important;
  }

  .mr-122 {
    margin-right: 7.625rem !important;
  }

  .mb-123 {
    margin-bottom: 7.6875rem !important;
  }

  .ml-123 {
    margin-left: 7.6875rem !important;
  }

  .mt-123 {
    margin-top: 7.6875rem !important;
  }

  .mr-123 {
    margin-right: 7.6875rem !important;
  }

  .mb-124 {
    margin-bottom: 7.75rem !important;
  }

  .ml-124 {
    margin-left: 7.75rem !important;
  }

  .mt-124 {
    margin-top: 7.75rem !important;
  }

  .mr-124 {
    margin-right: 7.75rem !important;
  }

  .mb-125 {
    margin-bottom: 7.8125rem !important;
  }

  .ml-125 {
    margin-left: 7.8125rem !important;
  }

  .mt-125 {
    margin-top: 7.8125rem !important;
  }

  .mr-125 {
    margin-right: 7.8125rem !important;
  }

  .mb-126 {
    margin-bottom: 7.875rem !important;
  }

  .ml-126 {
    margin-left: 7.875rem !important;
  }

  .mt-126 {
    margin-top: 7.875rem !important;
  }

  .mr-126 {
    margin-right: 7.875rem !important;
  }

  .mb-127 {
    margin-bottom: 7.9375rem !important;
  }

  .ml-127 {
    margin-left: 7.9375rem !important;
  }

  .mt-127 {
    margin-top: 7.9375rem !important;
  }

  .mr-127 {
    margin-right: 7.9375rem !important;
  }

  .mb-128 {
    margin-bottom: 8rem !important;
  }

  .ml-128 {
    margin-left: 8rem !important;
  }

  .mt-128 {
    margin-top: 8rem !important;
  }

  .mr-128 {
    margin-right: 8rem !important;
  }

  .mb-129 {
    margin-bottom: 8.0625rem !important;
  }

  .ml-129 {
    margin-left: 8.0625rem !important;
  }

  .mt-129 {
    margin-top: 8.0625rem !important;
  }

  .mr-129 {
    margin-right: 8.0625rem !important;
  }

  .mb-130 {
    margin-bottom: 8.125rem !important;
  }

  .ml-130 {
    margin-left: 8.125rem !important;
  }

  .mt-130 {
    margin-top: 8.125rem !important;
  }

  .mr-130 {
    margin-right: 8.125rem !important;
  }

  .mb-131 {
    margin-bottom: 8.1875rem !important;
  }

  .ml-131 {
    margin-left: 8.1875rem !important;
  }

  .mt-131 {
    margin-top: 8.1875rem !important;
  }

  .mr-131 {
    margin-right: 8.1875rem !important;
  }

  .mb-132 {
    margin-bottom: 8.25rem !important;
  }

  .ml-132 {
    margin-left: 8.25rem !important;
  }

  .mt-132 {
    margin-top: 8.25rem !important;
  }

  .mr-132 {
    margin-right: 8.25rem !important;
  }

  .mb-133 {
    margin-bottom: 8.3125rem !important;
  }

  .ml-133 {
    margin-left: 8.3125rem !important;
  }

  .mt-133 {
    margin-top: 8.3125rem !important;
  }

  .mr-133 {
    margin-right: 8.3125rem !important;
  }

  .mb-134 {
    margin-bottom: 8.375rem !important;
  }

  .ml-134 {
    margin-left: 8.375rem !important;
  }

  .mt-134 {
    margin-top: 8.375rem !important;
  }

  .mr-134 {
    margin-right: 8.375rem !important;
  }

  .mb-135 {
    margin-bottom: 8.4375rem !important;
  }

  .ml-135 {
    margin-left: 8.4375rem !important;
  }

  .mt-135 {
    margin-top: 8.4375rem !important;
  }

  .mr-135 {
    margin-right: 8.4375rem !important;
  }

  .mb-136 {
    margin-bottom: 8.5rem !important;
  }

  .ml-136 {
    margin-left: 8.5rem !important;
  }

  .mt-136 {
    margin-top: 8.5rem !important;
  }

  .mr-136 {
    margin-right: 8.5rem !important;
  }

  .mb-137 {
    margin-bottom: 8.5625rem !important;
  }

  .ml-137 {
    margin-left: 8.5625rem !important;
  }

  .mt-137 {
    margin-top: 8.5625rem !important;
  }

  .mr-137 {
    margin-right: 8.5625rem !important;
  }

  .mb-138 {
    margin-bottom: 8.625rem !important;
  }

  .ml-138 {
    margin-left: 8.625rem !important;
  }

  .mt-138 {
    margin-top: 8.625rem !important;
  }

  .mr-138 {
    margin-right: 8.625rem !important;
  }

  .mb-139 {
    margin-bottom: 8.6875rem !important;
  }

  .ml-139 {
    margin-left: 8.6875rem !important;
  }

  .mt-139 {
    margin-top: 8.6875rem !important;
  }

  .mr-139 {
    margin-right: 8.6875rem !important;
  }

  .mb-140 {
    margin-bottom: 8.75rem !important;
  }

  .ml-140 {
    margin-left: 8.75rem !important;
  }

  .mt-140 {
    margin-top: 8.75rem !important;
  }

  .mr-140 {
    margin-right: 8.75rem !important;
  }

  .mb-141 {
    margin-bottom: 8.8125rem !important;
  }

  .ml-141 {
    margin-left: 8.8125rem !important;
  }

  .mt-141 {
    margin-top: 8.8125rem !important;
  }

  .mr-141 {
    margin-right: 8.8125rem !important;
  }

  .mb-142 {
    margin-bottom: 8.875rem !important;
  }

  .ml-142 {
    margin-left: 8.875rem !important;
  }

  .mt-142 {
    margin-top: 8.875rem !important;
  }

  .mr-142 {
    margin-right: 8.875rem !important;
  }

  .mb-143 {
    margin-bottom: 8.9375rem !important;
  }

  .ml-143 {
    margin-left: 8.9375rem !important;
  }

  .mt-143 {
    margin-top: 8.9375rem !important;
  }

  .mr-143 {
    margin-right: 8.9375rem !important;
  }

  .mb-144 {
    margin-bottom: 9rem !important;
  }

  .ml-144 {
    margin-left: 9rem !important;
  }

  .mt-144 {
    margin-top: 9rem !important;
  }

  .mr-144 {
    margin-right: 9rem !important;
  }

  .mb-145 {
    margin-bottom: 9.0625rem !important;
  }

  .ml-145 {
    margin-left: 9.0625rem !important;
  }

  .mt-145 {
    margin-top: 9.0625rem !important;
  }

  .mr-145 {
    margin-right: 9.0625rem !important;
  }

  .mb-146 {
    margin-bottom: 9.125rem !important;
  }

  .ml-146 {
    margin-left: 9.125rem !important;
  }

  .mt-146 {
    margin-top: 9.125rem !important;
  }

  .mr-146 {
    margin-right: 9.125rem !important;
  }

  .mb-147 {
    margin-bottom: 9.1875rem !important;
  }

  .ml-147 {
    margin-left: 9.1875rem !important;
  }

  .mt-147 {
    margin-top: 9.1875rem !important;
  }

  .mr-147 {
    margin-right: 9.1875rem !important;
  }

  .mb-148 {
    margin-bottom: 9.25rem !important;
  }

  .ml-148 {
    margin-left: 9.25rem !important;
  }

  .mt-148 {
    margin-top: 9.25rem !important;
  }

  .mr-148 {
    margin-right: 9.25rem !important;
  }

  .mb-149 {
    margin-bottom: 9.3125rem !important;
  }

  .ml-149 {
    margin-left: 9.3125rem !important;
  }

  .mt-149 {
    margin-top: 9.3125rem !important;
  }

  .mr-149 {
    margin-right: 9.3125rem !important;
  }

  .mb-150 {
    margin-bottom: 9.375rem !important;
  }

  .ml-150 {
    margin-left: 9.375rem !important;
  }

  .mt-150 {
    margin-top: 9.375rem !important;
  }

  .mr-150 {
    margin-right: 9.375rem !important;
  }

  .mb-151 {
    margin-bottom: 9.4375rem !important;
  }

  .ml-151 {
    margin-left: 9.4375rem !important;
  }

  .mt-151 {
    margin-top: 9.4375rem !important;
  }

  .mr-151 {
    margin-right: 9.4375rem !important;
  }

  .mb-152 {
    margin-bottom: 9.5rem !important;
  }

  .ml-152 {
    margin-left: 9.5rem !important;
  }

  .mt-152 {
    margin-top: 9.5rem !important;
  }

  .mr-152 {
    margin-right: 9.5rem !important;
  }

  .mb-153 {
    margin-bottom: 9.5625rem !important;
  }

  .ml-153 {
    margin-left: 9.5625rem !important;
  }

  .mt-153 {
    margin-top: 9.5625rem !important;
  }

  .mr-153 {
    margin-right: 9.5625rem !important;
  }

  .mb-154 {
    margin-bottom: 9.625rem !important;
  }

  .ml-154 {
    margin-left: 9.625rem !important;
  }

  .mt-154 {
    margin-top: 9.625rem !important;
  }

  .mr-154 {
    margin-right: 9.625rem !important;
  }

  .mb-155 {
    margin-bottom: 9.6875rem !important;
  }

  .ml-155 {
    margin-left: 9.6875rem !important;
  }

  .mt-155 {
    margin-top: 9.6875rem !important;
  }

  .mr-155 {
    margin-right: 9.6875rem !important;
  }

  .mb-156 {
    margin-bottom: 9.75rem !important;
  }

  .ml-156 {
    margin-left: 9.75rem !important;
  }

  .mt-156 {
    margin-top: 9.75rem !important;
  }

  .mr-156 {
    margin-right: 9.75rem !important;
  }

  .mb-157 {
    margin-bottom: 9.8125rem !important;
  }

  .ml-157 {
    margin-left: 9.8125rem !important;
  }

  .mt-157 {
    margin-top: 9.8125rem !important;
  }

  .mr-157 {
    margin-right: 9.8125rem !important;
  }

  .mb-158 {
    margin-bottom: 9.875rem !important;
  }

  .ml-158 {
    margin-left: 9.875rem !important;
  }

  .mt-158 {
    margin-top: 9.875rem !important;
  }

  .mr-158 {
    margin-right: 9.875rem !important;
  }

  .mb-159 {
    margin-bottom: 9.9375rem !important;
  }

  .ml-159 {
    margin-left: 9.9375rem !important;
  }

  .mt-159 {
    margin-top: 9.9375rem !important;
  }

  .mr-159 {
    margin-right: 9.9375rem !important;
  }

  .mb-160 {
    margin-bottom: 10rem !important;
  }

  .ml-160 {
    margin-left: 10rem !important;
  }

  .mt-160 {
    margin-top: 10rem !important;
  }

  .mr-160 {
    margin-right: 10rem !important;
  }

  .mb-161 {
    margin-bottom: 10.0625rem !important;
  }

  .ml-161 {
    margin-left: 10.0625rem !important;
  }

  .mt-161 {
    margin-top: 10.0625rem !important;
  }

  .mr-161 {
    margin-right: 10.0625rem !important;
  }

  .mb-162 {
    margin-bottom: 10.125rem !important;
  }

  .ml-162 {
    margin-left: 10.125rem !important;
  }

  .mt-162 {
    margin-top: 10.125rem !important;
  }

  .mr-162 {
    margin-right: 10.125rem !important;
  }

  .mb-163 {
    margin-bottom: 10.1875rem !important;
  }

  .ml-163 {
    margin-left: 10.1875rem !important;
  }

  .mt-163 {
    margin-top: 10.1875rem !important;
  }

  .mr-163 {
    margin-right: 10.1875rem !important;
  }

  .mb-164 {
    margin-bottom: 10.25rem !important;
  }

  .ml-164 {
    margin-left: 10.25rem !important;
  }

  .mt-164 {
    margin-top: 10.25rem !important;
  }

  .mr-164 {
    margin-right: 10.25rem !important;
  }

  .mb-165 {
    margin-bottom: 10.3125rem !important;
  }

  .ml-165 {
    margin-left: 10.3125rem !important;
  }

  .mt-165 {
    margin-top: 10.3125rem !important;
  }

  .mr-165 {
    margin-right: 10.3125rem !important;
  }

  .mb-166 {
    margin-bottom: 10.375rem !important;
  }

  .ml-166 {
    margin-left: 10.375rem !important;
  }

  .mt-166 {
    margin-top: 10.375rem !important;
  }

  .mr-166 {
    margin-right: 10.375rem !important;
  }

  .mb-167 {
    margin-bottom: 10.4375rem !important;
  }

  .ml-167 {
    margin-left: 10.4375rem !important;
  }

  .mt-167 {
    margin-top: 10.4375rem !important;
  }

  .mr-167 {
    margin-right: 10.4375rem !important;
  }

  .mb-168 {
    margin-bottom: 10.5rem !important;
  }

  .ml-168 {
    margin-left: 10.5rem !important;
  }

  .mt-168 {
    margin-top: 10.5rem !important;
  }

  .mr-168 {
    margin-right: 10.5rem !important;
  }

  .mb-169 {
    margin-bottom: 10.5625rem !important;
  }

  .ml-169 {
    margin-left: 10.5625rem !important;
  }

  .mt-169 {
    margin-top: 10.5625rem !important;
  }

  .mr-169 {
    margin-right: 10.5625rem !important;
  }

  .mb-170 {
    margin-bottom: 10.625rem !important;
  }

  .ml-170 {
    margin-left: 10.625rem !important;
  }

  .mt-170 {
    margin-top: 10.625rem !important;
  }

  .mr-170 {
    margin-right: 10.625rem !important;
  }

  .mb-171 {
    margin-bottom: 10.6875rem !important;
  }

  .ml-171 {
    margin-left: 10.6875rem !important;
  }

  .mt-171 {
    margin-top: 10.6875rem !important;
  }

  .mr-171 {
    margin-right: 10.6875rem !important;
  }

  .mb-172 {
    margin-bottom: 10.75rem !important;
  }

  .ml-172 {
    margin-left: 10.75rem !important;
  }

  .mt-172 {
    margin-top: 10.75rem !important;
  }

  .mr-172 {
    margin-right: 10.75rem !important;
  }

  .mb-173 {
    margin-bottom: 10.8125rem !important;
  }

  .ml-173 {
    margin-left: 10.8125rem !important;
  }

  .mt-173 {
    margin-top: 10.8125rem !important;
  }

  .mr-173 {
    margin-right: 10.8125rem !important;
  }

  .mb-174 {
    margin-bottom: 10.875rem !important;
  }

  .ml-174 {
    margin-left: 10.875rem !important;
  }

  .mt-174 {
    margin-top: 10.875rem !important;
  }

  .mr-174 {
    margin-right: 10.875rem !important;
  }

  .mb-175 {
    margin-bottom: 10.9375rem !important;
  }

  .ml-175 {
    margin-left: 10.9375rem !important;
  }

  .mt-175 {
    margin-top: 10.9375rem !important;
  }

  .mr-175 {
    margin-right: 10.9375rem !important;
  }

  .mb-176 {
    margin-bottom: 11rem !important;
  }

  .ml-176 {
    margin-left: 11rem !important;
  }

  .mt-176 {
    margin-top: 11rem !important;
  }

  .mr-176 {
    margin-right: 11rem !important;
  }

  .mb-177 {
    margin-bottom: 11.0625rem !important;
  }

  .ml-177 {
    margin-left: 11.0625rem !important;
  }

  .mt-177 {
    margin-top: 11.0625rem !important;
  }

  .mr-177 {
    margin-right: 11.0625rem !important;
  }

  .mb-178 {
    margin-bottom: 11.125rem !important;
  }

  .ml-178 {
    margin-left: 11.125rem !important;
  }

  .mt-178 {
    margin-top: 11.125rem !important;
  }

  .mr-178 {
    margin-right: 11.125rem !important;
  }

  .mb-179 {
    margin-bottom: 11.1875rem !important;
  }

  .ml-179 {
    margin-left: 11.1875rem !important;
  }

  .mt-179 {
    margin-top: 11.1875rem !important;
  }

  .mr-179 {
    margin-right: 11.1875rem !important;
  }

  .mb-180 {
    margin-bottom: 11.25rem !important;
  }

  .ml-180 {
    margin-left: 11.25rem !important;
  }

  .mt-180 {
    margin-top: 11.25rem !important;
  }

  .mr-180 {
    margin-right: 11.25rem !important;
  }

  .mb-181 {
    margin-bottom: 11.3125rem !important;
  }

  .ml-181 {
    margin-left: 11.3125rem !important;
  }

  .mt-181 {
    margin-top: 11.3125rem !important;
  }

  .mr-181 {
    margin-right: 11.3125rem !important;
  }

  .mb-182 {
    margin-bottom: 11.375rem !important;
  }

  .ml-182 {
    margin-left: 11.375rem !important;
  }

  .mt-182 {
    margin-top: 11.375rem !important;
  }

  .mr-182 {
    margin-right: 11.375rem !important;
  }

  .mb-183 {
    margin-bottom: 11.4375rem !important;
  }

  .ml-183 {
    margin-left: 11.4375rem !important;
  }

  .mt-183 {
    margin-top: 11.4375rem !important;
  }

  .mr-183 {
    margin-right: 11.4375rem !important;
  }

  .mb-184 {
    margin-bottom: 11.5rem !important;
  }

  .ml-184 {
    margin-left: 11.5rem !important;
  }

  .mt-184 {
    margin-top: 11.5rem !important;
  }

  .mr-184 {
    margin-right: 11.5rem !important;
  }

  .mb-185 {
    margin-bottom: 11.5625rem !important;
  }

  .ml-185 {
    margin-left: 11.5625rem !important;
  }

  .mt-185 {
    margin-top: 11.5625rem !important;
  }

  .mr-185 {
    margin-right: 11.5625rem !important;
  }

  .mb-186 {
    margin-bottom: 11.625rem !important;
  }

  .ml-186 {
    margin-left: 11.625rem !important;
  }

  .mt-186 {
    margin-top: 11.625rem !important;
  }

  .mr-186 {
    margin-right: 11.625rem !important;
  }

  .mb-187 {
    margin-bottom: 11.6875rem !important;
  }

  .ml-187 {
    margin-left: 11.6875rem !important;
  }

  .mt-187 {
    margin-top: 11.6875rem !important;
  }

  .mr-187 {
    margin-right: 11.6875rem !important;
  }

  .mb-188 {
    margin-bottom: 11.75rem !important;
  }

  .ml-188 {
    margin-left: 11.75rem !important;
  }

  .mt-188 {
    margin-top: 11.75rem !important;
  }

  .mr-188 {
    margin-right: 11.75rem !important;
  }

  .mb-189 {
    margin-bottom: 11.8125rem !important;
  }

  .ml-189 {
    margin-left: 11.8125rem !important;
  }

  .mt-189 {
    margin-top: 11.8125rem !important;
  }

  .mr-189 {
    margin-right: 11.8125rem !important;
  }

  .mb-190 {
    margin-bottom: 11.875rem !important;
  }

  .ml-190 {
    margin-left: 11.875rem !important;
  }

  .mt-190 {
    margin-top: 11.875rem !important;
  }

  .mr-190 {
    margin-right: 11.875rem !important;
  }

  .mb-191 {
    margin-bottom: 11.9375rem !important;
  }

  .ml-191 {
    margin-left: 11.9375rem !important;
  }

  .mt-191 {
    margin-top: 11.9375rem !important;
  }

  .mr-191 {
    margin-right: 11.9375rem !important;
  }

  .mb-192 {
    margin-bottom: 12rem !important;
  }

  .ml-192 {
    margin-left: 12rem !important;
  }

  .mt-192 {
    margin-top: 12rem !important;
  }

  .mr-192 {
    margin-right: 12rem !important;
  }

  .mb-193 {
    margin-bottom: 12.0625rem !important;
  }

  .ml-193 {
    margin-left: 12.0625rem !important;
  }

  .mt-193 {
    margin-top: 12.0625rem !important;
  }

  .mr-193 {
    margin-right: 12.0625rem !important;
  }

  .mb-194 {
    margin-bottom: 12.125rem !important;
  }

  .ml-194 {
    margin-left: 12.125rem !important;
  }

  .mt-194 {
    margin-top: 12.125rem !important;
  }

  .mr-194 {
    margin-right: 12.125rem !important;
  }

  .mb-195 {
    margin-bottom: 12.1875rem !important;
  }

  .ml-195 {
    margin-left: 12.1875rem !important;
  }

  .mt-195 {
    margin-top: 12.1875rem !important;
  }

  .mr-195 {
    margin-right: 12.1875rem !important;
  }

  .mb-196 {
    margin-bottom: 12.25rem !important;
  }

  .ml-196 {
    margin-left: 12.25rem !important;
  }

  .mt-196 {
    margin-top: 12.25rem !important;
  }

  .mr-196 {
    margin-right: 12.25rem !important;
  }

  .mb-197 {
    margin-bottom: 12.3125rem !important;
  }

  .ml-197 {
    margin-left: 12.3125rem !important;
  }

  .mt-197 {
    margin-top: 12.3125rem !important;
  }

  .mr-197 {
    margin-right: 12.3125rem !important;
  }

  .mb-198 {
    margin-bottom: 12.375rem !important;
  }

  .ml-198 {
    margin-left: 12.375rem !important;
  }

  .mt-198 {
    margin-top: 12.375rem !important;
  }

  .mr-198 {
    margin-right: 12.375rem !important;
  }

  .mb-199 {
    margin-bottom: 12.4375rem !important;
  }

  .ml-199 {
    margin-left: 12.4375rem !important;
  }

  .mt-199 {
    margin-top: 12.4375rem !important;
  }

  .mr-199 {
    margin-right: 12.4375rem !important;
  }

  .mb-200 {
    margin-bottom: 12.5rem !important;
  }

  .ml-200 {
    margin-left: 12.5rem !important;
  }

  .mt-200 {
    margin-top: 12.5rem !important;
  }

  .mr-200 {
    margin-right: 12.5rem !important;
  }

  .mb-201 {
    margin-bottom: 12.5625rem !important;
  }

  .ml-201 {
    margin-left: 12.5625rem !important;
  }

  .mt-201 {
    margin-top: 12.5625rem !important;
  }

  .mr-201 {
    margin-right: 12.5625rem !important;
  }

  .mb-202 {
    margin-bottom: 12.625rem !important;
  }

  .ml-202 {
    margin-left: 12.625rem !important;
  }

  .mt-202 {
    margin-top: 12.625rem !important;
  }

  .mr-202 {
    margin-right: 12.625rem !important;
  }

  .mb-203 {
    margin-bottom: 12.6875rem !important;
  }

  .ml-203 {
    margin-left: 12.6875rem !important;
  }

  .mt-203 {
    margin-top: 12.6875rem !important;
  }

  .mr-203 {
    margin-right: 12.6875rem !important;
  }

  .mb-204 {
    margin-bottom: 12.75rem !important;
  }

  .ml-204 {
    margin-left: 12.75rem !important;
  }

  .mt-204 {
    margin-top: 12.75rem !important;
  }

  .mr-204 {
    margin-right: 12.75rem !important;
  }

  .mb-205 {
    margin-bottom: 12.8125rem !important;
  }

  .ml-205 {
    margin-left: 12.8125rem !important;
  }

  .mt-205 {
    margin-top: 12.8125rem !important;
  }

  .mr-205 {
    margin-right: 12.8125rem !important;
  }

  .mb-206 {
    margin-bottom: 12.875rem !important;
  }

  .ml-206 {
    margin-left: 12.875rem !important;
  }

  .mt-206 {
    margin-top: 12.875rem !important;
  }

  .mr-206 {
    margin-right: 12.875rem !important;
  }

  .mb-207 {
    margin-bottom: 12.9375rem !important;
  }

  .ml-207 {
    margin-left: 12.9375rem !important;
  }

  .mt-207 {
    margin-top: 12.9375rem !important;
  }

  .mr-207 {
    margin-right: 12.9375rem !important;
  }

  .mb-208 {
    margin-bottom: 13rem !important;
  }

  .ml-208 {
    margin-left: 13rem !important;
  }

  .mt-208 {
    margin-top: 13rem !important;
  }

  .mr-208 {
    margin-right: 13rem !important;
  }

  .mb-209 {
    margin-bottom: 13.0625rem !important;
  }

  .ml-209 {
    margin-left: 13.0625rem !important;
  }

  .mt-209 {
    margin-top: 13.0625rem !important;
  }

  .mr-209 {
    margin-right: 13.0625rem !important;
  }

  .mb-210 {
    margin-bottom: 13.125rem !important;
  }

  .ml-210 {
    margin-left: 13.125rem !important;
  }

  .mt-210 {
    margin-top: 13.125rem !important;
  }

  .mr-210 {
    margin-right: 13.125rem !important;
  }

  .mb-211 {
    margin-bottom: 13.1875rem !important;
  }

  .ml-211 {
    margin-left: 13.1875rem !important;
  }

  .mt-211 {
    margin-top: 13.1875rem !important;
  }

  .mr-211 {
    margin-right: 13.1875rem !important;
  }

  .mb-212 {
    margin-bottom: 13.25rem !important;
  }

  .ml-212 {
    margin-left: 13.25rem !important;
  }

  .mt-212 {
    margin-top: 13.25rem !important;
  }

  .mr-212 {
    margin-right: 13.25rem !important;
  }

  .mb-213 {
    margin-bottom: 13.3125rem !important;
  }

  .ml-213 {
    margin-left: 13.3125rem !important;
  }

  .mt-213 {
    margin-top: 13.3125rem !important;
  }

  .mr-213 {
    margin-right: 13.3125rem !important;
  }

  .mb-214 {
    margin-bottom: 13.375rem !important;
  }

  .ml-214 {
    margin-left: 13.375rem !important;
  }

  .mt-214 {
    margin-top: 13.375rem !important;
  }

  .mr-214 {
    margin-right: 13.375rem !important;
  }

  .mb-215 {
    margin-bottom: 13.4375rem !important;
  }

  .ml-215 {
    margin-left: 13.4375rem !important;
  }

  .mt-215 {
    margin-top: 13.4375rem !important;
  }

  .mr-215 {
    margin-right: 13.4375rem !important;
  }

  .mb-216 {
    margin-bottom: 13.5rem !important;
  }

  .ml-216 {
    margin-left: 13.5rem !important;
  }

  .mt-216 {
    margin-top: 13.5rem !important;
  }

  .mr-216 {
    margin-right: 13.5rem !important;
  }

  .mb-217 {
    margin-bottom: 13.5625rem !important;
  }

  .ml-217 {
    margin-left: 13.5625rem !important;
  }

  .mt-217 {
    margin-top: 13.5625rem !important;
  }

  .mr-217 {
    margin-right: 13.5625rem !important;
  }

  .mb-218 {
    margin-bottom: 13.625rem !important;
  }

  .ml-218 {
    margin-left: 13.625rem !important;
  }

  .mt-218 {
    margin-top: 13.625rem !important;
  }

  .mr-218 {
    margin-right: 13.625rem !important;
  }

  .mb-219 {
    margin-bottom: 13.6875rem !important;
  }

  .ml-219 {
    margin-left: 13.6875rem !important;
  }

  .mt-219 {
    margin-top: 13.6875rem !important;
  }

  .mr-219 {
    margin-right: 13.6875rem !important;
  }

  .mb-220 {
    margin-bottom: 13.75rem !important;
  }

  .ml-220 {
    margin-left: 13.75rem !important;
  }

  .mt-220 {
    margin-top: 13.75rem !important;
  }

  .mr-220 {
    margin-right: 13.75rem !important;
  }

  .mb-221 {
    margin-bottom: 13.8125rem !important;
  }

  .ml-221 {
    margin-left: 13.8125rem !important;
  }

  .mt-221 {
    margin-top: 13.8125rem !important;
  }

  .mr-221 {
    margin-right: 13.8125rem !important;
  }

  .mb-222 {
    margin-bottom: 13.875rem !important;
  }

  .ml-222 {
    margin-left: 13.875rem !important;
  }

  .mt-222 {
    margin-top: 13.875rem !important;
  }

  .mr-222 {
    margin-right: 13.875rem !important;
  }

  .mb-223 {
    margin-bottom: 13.9375rem !important;
  }

  .ml-223 {
    margin-left: 13.9375rem !important;
  }

  .mt-223 {
    margin-top: 13.9375rem !important;
  }

  .mr-223 {
    margin-right: 13.9375rem !important;
  }

  .mb-224 {
    margin-bottom: 14rem !important;
  }

  .ml-224 {
    margin-left: 14rem !important;
  }

  .mt-224 {
    margin-top: 14rem !important;
  }

  .mr-224 {
    margin-right: 14rem !important;
  }

  .mb-225 {
    margin-bottom: 14.0625rem !important;
  }

  .ml-225 {
    margin-left: 14.0625rem !important;
  }

  .mt-225 {
    margin-top: 14.0625rem !important;
  }

  .mr-225 {
    margin-right: 14.0625rem !important;
  }

  .mb-226 {
    margin-bottom: 14.125rem !important;
  }

  .ml-226 {
    margin-left: 14.125rem !important;
  }

  .mt-226 {
    margin-top: 14.125rem !important;
  }

  .mr-226 {
    margin-right: 14.125rem !important;
  }

  .mb-227 {
    margin-bottom: 14.1875rem !important;
  }

  .ml-227 {
    margin-left: 14.1875rem !important;
  }

  .mt-227 {
    margin-top: 14.1875rem !important;
  }

  .mr-227 {
    margin-right: 14.1875rem !important;
  }

  .mb-228 {
    margin-bottom: 14.25rem !important;
  }

  .ml-228 {
    margin-left: 14.25rem !important;
  }

  .mt-228 {
    margin-top: 14.25rem !important;
  }

  .mr-228 {
    margin-right: 14.25rem !important;
  }

  .mb-229 {
    margin-bottom: 14.3125rem !important;
  }

  .ml-229 {
    margin-left: 14.3125rem !important;
  }

  .mt-229 {
    margin-top: 14.3125rem !important;
  }

  .mr-229 {
    margin-right: 14.3125rem !important;
  }

  .mb-230 {
    margin-bottom: 14.375rem !important;
  }

  .ml-230 {
    margin-left: 14.375rem !important;
  }

  .mt-230 {
    margin-top: 14.375rem !important;
  }

  .mr-230 {
    margin-right: 14.375rem !important;
  }

  .mb-231 {
    margin-bottom: 14.4375rem !important;
  }

  .ml-231 {
    margin-left: 14.4375rem !important;
  }

  .mt-231 {
    margin-top: 14.4375rem !important;
  }

  .mr-231 {
    margin-right: 14.4375rem !important;
  }

  .mb-232 {
    margin-bottom: 14.5rem !important;
  }

  .ml-232 {
    margin-left: 14.5rem !important;
  }

  .mt-232 {
    margin-top: 14.5rem !important;
  }

  .mr-232 {
    margin-right: 14.5rem !important;
  }

  .mb-233 {
    margin-bottom: 14.5625rem !important;
  }

  .ml-233 {
    margin-left: 14.5625rem !important;
  }

  .mt-233 {
    margin-top: 14.5625rem !important;
  }

  .mr-233 {
    margin-right: 14.5625rem !important;
  }

  .mb-234 {
    margin-bottom: 14.625rem !important;
  }

  .ml-234 {
    margin-left: 14.625rem !important;
  }

  .mt-234 {
    margin-top: 14.625rem !important;
  }

  .mr-234 {
    margin-right: 14.625rem !important;
  }

  .mb-235 {
    margin-bottom: 14.6875rem !important;
  }

  .ml-235 {
    margin-left: 14.6875rem !important;
  }

  .mt-235 {
    margin-top: 14.6875rem !important;
  }

  .mr-235 {
    margin-right: 14.6875rem !important;
  }

  .mb-236 {
    margin-bottom: 14.75rem !important;
  }

  .ml-236 {
    margin-left: 14.75rem !important;
  }

  .mt-236 {
    margin-top: 14.75rem !important;
  }

  .mr-236 {
    margin-right: 14.75rem !important;
  }

  .mb-237 {
    margin-bottom: 14.8125rem !important;
  }

  .ml-237 {
    margin-left: 14.8125rem !important;
  }

  .mt-237 {
    margin-top: 14.8125rem !important;
  }

  .mr-237 {
    margin-right: 14.8125rem !important;
  }

  .mb-238 {
    margin-bottom: 14.875rem !important;
  }

  .ml-238 {
    margin-left: 14.875rem !important;
  }

  .mt-238 {
    margin-top: 14.875rem !important;
  }

  .mr-238 {
    margin-right: 14.875rem !important;
  }

  .mb-239 {
    margin-bottom: 14.9375rem !important;
  }

  .ml-239 {
    margin-left: 14.9375rem !important;
  }

  .mt-239 {
    margin-top: 14.9375rem !important;
  }

  .mr-239 {
    margin-right: 14.9375rem !important;
  }

  .mb-240 {
    margin-bottom: 15rem !important;
  }

  .ml-240 {
    margin-left: 15rem !important;
  }

  .mt-240 {
    margin-top: 15rem !important;
  }

  .mr-240 {
    margin-right: 15rem !important;
  }

  .mb-241 {
    margin-bottom: 15.0625rem !important;
  }

  .ml-241 {
    margin-left: 15.0625rem !important;
  }

  .mt-241 {
    margin-top: 15.0625rem !important;
  }

  .mr-241 {
    margin-right: 15.0625rem !important;
  }

  .mb-242 {
    margin-bottom: 15.125rem !important;
  }

  .ml-242 {
    margin-left: 15.125rem !important;
  }

  .mt-242 {
    margin-top: 15.125rem !important;
  }

  .mr-242 {
    margin-right: 15.125rem !important;
  }

  .mb-243 {
    margin-bottom: 15.1875rem !important;
  }

  .ml-243 {
    margin-left: 15.1875rem !important;
  }

  .mt-243 {
    margin-top: 15.1875rem !important;
  }

  .mr-243 {
    margin-right: 15.1875rem !important;
  }

  .mb-244 {
    margin-bottom: 15.25rem !important;
  }

  .ml-244 {
    margin-left: 15.25rem !important;
  }

  .mt-244 {
    margin-top: 15.25rem !important;
  }

  .mr-244 {
    margin-right: 15.25rem !important;
  }

  .mb-245 {
    margin-bottom: 15.3125rem !important;
  }

  .ml-245 {
    margin-left: 15.3125rem !important;
  }

  .mt-245 {
    margin-top: 15.3125rem !important;
  }

  .mr-245 {
    margin-right: 15.3125rem !important;
  }

  .mb-246 {
    margin-bottom: 15.375rem !important;
  }

  .ml-246 {
    margin-left: 15.375rem !important;
  }

  .mt-246 {
    margin-top: 15.375rem !important;
  }

  .mr-246 {
    margin-right: 15.375rem !important;
  }

  .mb-247 {
    margin-bottom: 15.4375rem !important;
  }

  .ml-247 {
    margin-left: 15.4375rem !important;
  }

  .mt-247 {
    margin-top: 15.4375rem !important;
  }

  .mr-247 {
    margin-right: 15.4375rem !important;
  }

  .mb-248 {
    margin-bottom: 15.5rem !important;
  }

  .ml-248 {
    margin-left: 15.5rem !important;
  }

  .mt-248 {
    margin-top: 15.5rem !important;
  }

  .mr-248 {
    margin-right: 15.5rem !important;
  }

  .mb-249 {
    margin-bottom: 15.5625rem !important;
  }

  .ml-249 {
    margin-left: 15.5625rem !important;
  }

  .mt-249 {
    margin-top: 15.5625rem !important;
  }

  .mr-249 {
    margin-right: 15.5625rem !important;
  }

  .mb-250 {
    margin-bottom: 15.625rem !important;
  }

  .ml-250 {
    margin-left: 15.625rem !important;
  }

  .mt-250 {
    margin-top: 15.625rem !important;
  }

  .mr-250 {
    margin-right: 15.625rem !important;
  }
`;

margins = StringMethods.setOneLineText(margins);

export default margins;
