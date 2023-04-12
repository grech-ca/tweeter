declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react';
  const content: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.svg?url' {
  const url: string;
  export default url;
}

declare module '*.svg?component' {
  import { FunctionComponent, SVGProps } from 'react';
  const content: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default content;
}
