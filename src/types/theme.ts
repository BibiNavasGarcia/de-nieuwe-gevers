interface ThemeGroupInterface {
  [key: string]: string | number;
}

export interface ThemeValueInterface {
  border: ThemeGroupInterface;
  borderRadius: ThemeGroupInterface;
  buttonHeight: ThemeGroupInterface;
  color: ThemeGroupInterface;
  font: ThemeGroupInterface;
  textSize: ThemeGroupInterface;
  titleSize: ThemeGroupInterface;
  spacing: ThemeGroupInterface;
};
