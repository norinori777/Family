# 設計

- tailwindcss で CSS を実装する。
- 動的にコンテンツを追加デールベースのサイトを構築。
- リンクの関係性
  - １つの Header リンクに SideMenu に複数のリンクを置くことができる。
  - SideMenu のリンクには、リンクに対応したコンテンツを関連付けられる。
  - Header のリンク（章）
    - SideMenu（節）
    - コンテンツ（内容）
- 上記の関連付けは、src/contents/配下に定義してる。

  ```
  import {
  ContentItem,
  Contents,
  HeaderMenuItem,
  SideMenuItem,
  } from "../../domain/contents/types";
  import { Pencil } from "../../icons/Pencil";
  import { test } from "../../test";

  // サイドメニューのリンク
  const menuItems: SideMenuItem[] = [
  { icon: Pencil, text: "MenuTitle1", link: "/test1" },
  { icon: Pencil, text: "MenuTitle2", link: "/test2" },
  { icon: Pencil, text: "MenuTitle3", link: "/test3" },
  { icon: Pencil, text: "MenuTitle4", link: "/test4" },
  { icon: Pencil, text: "MenuTitle5", link: "/test5" },
  ];

  // サイドメニューに対応したコンテンツ
  const contentItems: ContentItem[] = [
  { link: "/test1", component: test },
  { link: "/test2", component: test },
  { link: "/test3", component: test },
  { link: "/test4", component: test },
  { link: "/test5", component: test },
  ];

  //　Headerのリンク情報
  const headerMenuItem: HeaderMenuItem = {
  text: "HeaderTitle1",
  initialLink: "/test1",
  };

  export const header1Contents: Contents = {
  headerMenuItem: headerMenuItem,
  sideMenuItems: menuItems,
  contentItems: contentItems,
  };
  ```

- React-Router にて上記のコンテンツに遷移できるように実装。
- Tailwindcss でテーマを利用して、デザインン色を変更できる設計をする。

# 利用記述

- React
- Recoil
- tailwindcss
- React-router-dom
- storybook 　（NG:tailwindcss が連携してうまく動作しない）

# 検討

- tailwindcss のテーマの実装を検討する。
- レスポンシブでの実装を検討する。

# イメージ

![image](https://user-images.githubusercontent.com/9112682/190882792-70811477-8350-4069-98ec-f291e19de482.png)
