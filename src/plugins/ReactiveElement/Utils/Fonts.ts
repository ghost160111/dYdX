import { StringMethods } from "./StringMethods";

let Fonts: string = /*css*/`
  .hero,
  .h-xlarge,
  .h-large,
  .h-medium,
  .h-small,
  .p-large,
  .p-medium,
  .p-small,
  .label {
    font-family: var(--font-nunito);
  }

  .hero,
  .h-xlarge,
  .h-large,
  .h-medium,
  .h-small,
  .p-large,
  .label {
    font-weight: bold;
  }

  .p-medium,
  .p-small {
    font-weight: 400;
  }

  .hero {
    font-size: 5rem;
    line-height: 5.5rem;
  }
  .hero--mobile {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  .h-xlarge {
    font-size: 3.75rem;
    line-height: 4.5rem;
  }
  .h-xlarge--mobile {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  .h-large {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  .h-large--mobile {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .h-medium {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .h-medium--mobile {
    font-size: 1.25rem;
    line-height: 2rem;
  }

  .h-small {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  .h-small--mobile {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .p-large {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
  .p-large--mobile {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .p-medium {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .p-medium--mobile {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .p-small {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
  .p-small--mobile {
    font-size: 0.75rem;
    line-height: 1.25rem;
  }

  .p-mono-xlarge,
  .p-mono-large,
  .p-mono-medium,
  .p-mono-small {
    font-family: var(--font-space-mono);
    font-weight: normal;
  }

  .p-mono-xlarge {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  .p-mono-xlarge--mobile {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  .p-mono-large {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
  .p-mono-large--mobile {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .p-mono-medium {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .p-mono-medium--mobile {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .p-mono-small {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
  .p-mono-small--mobile {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

Fonts = StringMethods.setOneLineText(Fonts);

export default Fonts;
