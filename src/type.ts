export type LanguageDataType = {
  name: string;
  fileExtension: string[];
  namingConvension: 'PascalCase' | 'camelCase' | 'snake_case' | 'kebab-case';
  logo: string;
};

export type GetLanguageDataInputType = {
  name?: string;
  fileExtension?: string;
};

export type RenameFileInputType = {
  name?: string;
  fileExtension?: string;
  fileName: string;
};
