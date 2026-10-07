# 之間 Between · 情緒互動概念 Demo v0.1

依同資料夾「情緒展演_DEMO_AI協作規格_v0.1.md」製作。A 靠近與停留、B 牽引與放手，各 150 秒。這是探索原型，音樂、正式情緒、設備、完整 20 分鐘內容與結局意義仍待甲方確認。

## 本機體驗
安裝 Node.js 24 或以上後，在此資料夾執行 `npm run dev`，開啟 http://127.0.0.1:4173 。沒有第三方套件，無須 npm install。勿直接雙擊 HTML（ES modules 需要 HTTP）。

## 使用
入口選方向後按「進入體驗」。A 移動游標與停留；B 懸停可抓取形狀，拖曳與放手。暫停、切換分頁或失焦不累積時間；回來按繼續。空白鍵暫停，Escape 暫停。桌機滑鼠為驗收基準；觸控尚未正式驗證。

## GitHub Pages
已推送至公開 repository，並啟用 GitHub Actions 作為 Pages 發布來源。

- 原始碼：https://github.com/CamapNorz/music-web-demo
- 展示網址：https://camapnorz.github.io/music-web-demo/
- 發布結果：https://github.com/CamapNorz/music-web-demo/actions

後續修改完成後，執行 `npm run check`、`npm test`，再 `git add <修改的檔案>`、`git commit -m "Describe changes"`、`git push`。main 的更新會自動觸發測試與部署。

遠端 repository：https://github.com/CamapNorz/music-web-demo 。部署網址與實際驗證狀態以 TEST-REPORT.md 為準。

發布設定依據：[GitHub Pages 官方自訂工作流程文件](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 維護與素材
- `public/app.js`：生命週期、輸入、暫停與事件。
- `public/config` 無獨立檔案：可調時長、閾值、速度與半徑統一在 `public/state.js` 的 CONFIG。
- `public/visuals.js`：兩套 Canvas 視覺，固定公式動畫，不以亂數判定結局。
- `public/audio.js`：原創 Web Audio 暫代三層音色；日後可保留 start/update/pause/resume/stop 介面，替換完整音軌或分軌。
- Google Fonts 的 Noto Serif TC 用於標題；離線或載入失敗時使用 serif。無外部圖片或商用音樂。

## 開發與驗收
`npm run check` 檢查語法；`npm test` 檢查六種判定、幀率一致性、最後一秒不翻盤，以及拖曳張力與釋放。`?debug=1` 顯示工程代理狀態，展示網址請勿加此參數。這些變數不是心理分析。

A：20–130 秒平均 energy ≥ .60 → 餘振；否則 engagement ≥ .50 → 聚合，其餘漂離。速度以短邊每秒 1.8 倍正規化，上限 1，移動短時平均且停止時衰減。核心半徑 .29 短邊內視為參與。
B：平均 tension ≥ .60 → 懸置；否則 engagement ≥ .45 → 編織，其餘回流。張力為六條連線相對初始長度 .22 的正伸長平均，再除以 1.0；有效抓取期間視為參與。未更改規格閾值。

完整實測與未測項目見 TEST-REPORT.md。不宣稱特定 FPS、完整手機適配或正式作品完成。
