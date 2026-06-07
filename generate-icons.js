// OpenPlay Games - 游戏图标生成脚本
// 运行: node generate-icons.js

const fs = require('fs');
const path = require('path');

const games = [
    { id: '2048', emoji: '🔢', color: '#776e65', bg: '#faf8ef', text: '2048' },
    { id: 'tetris', emoji: '🧱', color: '#00f2fe', bg: '#1a1a2e', text: 'TETRIS' },
    { id: 'snake', emoji: '🐍', color: '#4ade80', bg: '#0f172a', text: 'SNAKE' },
    { id: 'minesweeper', emoji: '💣', color: '#f97316', bg: '#1e293b', text: 'MINE' },
    { id: 'pong', emoji: '🏓', color: '#ffffff', bg: '#000000', text: 'PONG' },
    { id: 'sokoban', emoji: '📦', color: '#fbbf24', bg: '#1e1b4b', text: 'SOKO' },
    { id: 'flappy-bird', emoji: '🐦', color: '#fbbf24', bg: '#0f172a', text: 'FLAPPY' },
    { id: 'pacman', emoji: '👻', color: '#fde047', bg: '#0f172a', text: 'PACMAN' },
    { id: 'sudoku', emoji: '🧩', color: '#60a5fa', bg: '#0f172a', text: 'SUDOKU' },
    { id: 'tic-tac-toe', emoji: '❌', color: '#a78bfa', bg: '#0f172a', text: 'TIC' }
];

const outputDir = path.join(__dirname, 'images');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

games.forEach(game => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${game.bg};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="300" height="200" rx="12" fill="url(#bg)"/>
  <rect x="2" y="2" width="296" height="196" rx="10" fill="none" stroke="${game.color}" stroke-opacity="0.3" stroke-width="1"/>
  <text x="150" y="80" text-anchor="middle" font-size="60">${game.emoji}</text>
  <text x="150" y="140" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="${game.color}" letter-spacing="3">${game.text}</text>
</svg>`;

    const outputPath = path.join(outputDir, `${game.id}.svg`);
    fs.writeFileSync(outputPath, svg, 'utf-8');
    console.log(`✅ 已生成: images/${game.id}.svg`);
});

console.log('\n🎉 所有图标生成完成！');
