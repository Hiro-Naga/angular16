# Angular16

### angular15での変更点
- standalone componentが正式版に
  ```sh
  ng generate component component-name --standalone
  ```
  コンポーネントの`standalone`をtrueにすることで利用可能<br>
  app.module.tsのimportにではなく、各コンポーネント内でimportする

- 複数ディレクティブの合成
  フォントサイズを指定した＠directiveとフォントカラーを指定した@directiveを合成しフォントサイズとカラーを指定した@directiveを作成することができる<br>
  standalone directive及びstandalone component1でのみ利用可能。<br>
  ```ts
  @directive({
    selector: '[sampleDirective]',
    standalone: true,
    hostDirectives: [subDirective],
  })
  ```
  hostDirectivesとして指定したdirectiveを合成したものを返すdirectiveとなる。

- 

