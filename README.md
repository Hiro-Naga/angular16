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

### angular16での変更点
- signal
  angularにおける状態管理APIでありreactにおけるstateのようなもの。<br>
  ```ts
  const count: WritableSignal<number>|Signal<number> = signal(0); // WritableSignalはSignalの中でもvalueを直接変えることができるもの

  function buttonHandler() {
    count.update(value => value + 1);
  }
  ```
  RxJSを利用しなくても状態管理ができるようになったし、RxJSと組み合わせることもできる
    - サーバからUser情報を取得する`getUser()`を用意してある場合の例
    ```ts
    const user: Signal<User> = signal({});

    function sample() {
      this.service.getUser().then((user) => this.user.set(user));
    }
    ```

- hydration
  以前までDOMを全て廃棄して再レンダリングしていたが、再利用するか選べるようになった<br>
  パフォーマンスの向上が見込めるとのこと

- esbuildベースのbuildシステム
  build時間の短縮が見込めるとのこと<br>
  viteとの連携も含む

- standalone componentへの移行
  15での正式サポートに引き続き、サポート体制を強化<br>
  cliからの入力でstandalone componentを作りやすくなる他、チュートリアルが刷新されstandaloneベースのものに変更されているなど、standaloneへの移行に力を入れている
  ```sh
  ng new --standalone
  ```

- その他
  node.jsやtypescriptのバージョンアップ
