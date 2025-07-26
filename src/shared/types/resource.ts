type TRedirectData = Record<string, string>;

type TSeoData = Record<string, string>;

type TPicsData = Record<string, string>;

export type TResourceData = Record<'id' | 'menuindex', number> & Record<string, string> & { pics: TPicsData[]; redirect: TRedirectData; seo: TSeoData; };
