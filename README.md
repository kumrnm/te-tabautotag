# Tab Auto Tag

[Tablacus Explorer](https://tablacus.github.io/explorer.html) のアドオンです。

## 機能

設定画面から **タグ名** (Tag Names) を登録すると、名前にタグ名を含むフォルダ及びその子孫フォルダを開いた際に、タブにタグ名が表示されるようになります。

（例）`C:\Users\foo-bar\baz\qux` を開いた際の標準のタブ名は `qux` ですが、`bar` をタグ名として登録すると、タブ名は `qux (bar)` となります。

## 導入方法

[tabautotag.zip](https://github.com/kumrnm/te-tabautotag/releases/download/v1.00/tabautotag.zip) を解凍し、Tablacus Explorer の addons フォルダに配置します。

## 設定項目

アドオン一覧のオプションボタン（歯車ボタン）から変更できます。

- Tag Names : タグ名
    - カンマまたは改行で区切ることで複数登録できます。

- Exclude : 除外文字列
    - フォルダ名のうち、タグ名の検索の対象としない文字列を指定します。
    - （例）`aria` をタグ名として登録した場合、`MariaCurie` フォルダはこのタグにヒットしますが、この挙動が望ましくない場合、例えば `Maria` を除外文字列に指定することで回避できます。

- Hide tag if folder name contains same text
    - フォルダ名がタグ名を含む場合はタグ名を非表示にします。
