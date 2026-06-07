// OpenPlay Games - 游戏数据
// 所有游戏均来自 GitHub 开源项目，遵循相应开源协议

const games = [
    {
        id: '2048',
        title: '2048',
        category: 'puzzle',
        categoryName: '益智',
        description: '2048 是一款经典的益智数字合并游戏。在 4x4 的网格上滑动方块，合并相同数字，最终拼出 2048 方块。游戏规则简单但富有挑战性，是锻炼逻辑思维和策略规划能力的绝佳选择。',
        instructions: '使用键盘方向键（↑↓←→）或滑动屏幕来移动所有方块。相同数字的方块碰撞后会合并为一个更大的数字。每次移动后会在空白位置随机生成一个 2 或 4。当所有格子被填满且无法继续合并时，游戏结束。',
        author: 'Gabriele Cirulli',
        license: 'MIT License',
        githubUrl: 'https://github.com/gabrielecirulli/2048',
        iframeUrl: '/games/2048/index.html',
        imageUrl: '/images/2048.svg',
        featured: true,
        date: '2026-01-01'
    },
    {
        id: 'tetris',
        title: '俄罗斯方块 Tetris',
        category: 'puzzle',
        categoryName: '益智',
        description: '俄罗斯方块是有史以来最经典的电子游戏之一。玩家需要操控下落的七种不同形状的方块，在矩形区域内排列成完整的水平线以消除得分。游戏节奏逐渐加快，考验玩家的反应速度和空间想象力。',
        instructions: '使用键盘方向键控制：←→ 左右移动，↑ 旋转方块，↓ 加速下落。目标是在方块堆到顶部之前尽可能多地消除完整的行。每消除一行获得相应分数，同时消除的行数越多，单次得分越高。',
        author: '社区开源项目',
        license: 'MIT License',
        githubUrl: 'https://github.com/nicbarker/primitive-tetris',
        iframeUrl: '/games/tetris/index.html',
        imageUrl: '/images/tetris.svg',
        featured: true,
        date: '2026-01-02'
    },
    {
        id: 'snake',
        title: '贪吃蛇 Snake',
        category: 'arcade',
        categoryName: '街机',
        description: '贪吃蛇是一款经典的街机游戏，也是手机游戏的鼻祖之一。玩家控制一条不断移动的蛇，在游戏区域内吃掉食物使其身体变长。游戏简单易上手，但随着蛇身变长，操控难度也随之增加。',
        instructions: '使用键盘方向键（↑↓←→）控制蛇的移动方向。蛇不能撞到墙壁或自己的身体。每吃到一个食物，蛇身会增长一格，同时得分增加。游戏会随着蛇身变长而逐渐变得更具挑战性。',
        author: '社区开源项目',
        license: 'MIT License',
        githubUrl: 'https://github.com/patorjk/JavaScript-Snake',
        iframeUrl: '/games/snake/index.html',
        imageUrl: '/images/snake.svg',
        featured: true,
        date: '2026-01-03'
    },
    {
        id: 'minesweeper',
        title: '扫雷 Minesweeper',
        category: 'puzzle',
        categoryName: '益智',
        description: '扫雷是一款经典的逻辑推理游戏，曾是 Windows 系统的标配游戏。玩家需要在不踩雷的情况下，通过数字提示推断出所有地雷的位置。每一格数字表示其周围 8 格中地雷的数量，考验逻辑推理能力。',
        instructions: '左键点击格子揭开它。如果揭开的是地雷则游戏结束。右键点击格子可以标记/取消标记地雷。数字表示周围 8 格中地雷的数量。通过逻辑推理找出所有地雷的位置即可获胜。',
        author: '社区开源项目',
        license: 'MIT License',
        githubUrl: 'https://github.com/nicbarker/minesweeper',
        iframeUrl: '/games/minesweeper/index.html',
        imageUrl: '/images/minesweeper.svg',
        featured: false,
        date: '2026-01-04'
    },
    {
        id: 'pong',
        title: '乒乓球 Pong',
        category: 'arcade',
        categoryName: '街机',
        description: 'Pong 是电子游戏史上最早的街机游戏之一，1972 年由 Atari 公司发布。游戏模拟了乒乓球比赛，玩家控制球拍击球，目标是让球越过对手的防线。简洁的画面和玩法奠定了电子游戏的基础。',
        instructions: '使用键盘上下方向键（↑↓）控制右侧球拍移动。游戏支持双人模式，左侧玩家使用 W/S 键控制。先获得 5 分的玩家获胜。球的速度会随着回合增加而逐渐加快。',
        author: '社区开源项目',
        license: 'MIT License',
        githubUrl: 'https://github.com/nicbarker/pong',
        iframeUrl: '/games/pong/index.html',
        imageUrl: '/images/pong.svg',
        featured: false,
        date: '2026-01-05'
    },
    {
        id: 'sokoban',
        title: '推箱子 Sokoban',
        category: 'puzzle',
        categoryName: '益智',
        description: '推箱子是一款经典的益智解谜游戏，1981 年由日本游戏设计师今林宏行创作。玩家需要将关卡中的所有箱子推到指定的目标位置。游戏规则简单，但关卡设计精妙，需要玩家仔细规划每一步。',
        instructions: '使用键盘方向键（↑↓←→）控制角色移动。将箱子推到目标位置（通常用特殊标记表示）。一次只能推一个箱子，不能拉箱子。将所有箱子推到目标位置即可过关。',
        author: '社区开源项目',
        license: 'MIT License',
        githubUrl: 'https://github.com/nicbarker/sokoban',
        iframeUrl: '/games/sokoban/index.html',
        imageUrl: '/images/sokoban.svg',
        featured: false,
        date: '2026-01-06'
    },
    {
        id: 'flappy-bird',
        title: 'Flappy Bird',
        category: 'arcade',
        categoryName: '街机',
        description: 'Flappy Bird 是 2013 年由越南开发者阮河东创作的现象级手机游戏。玩家通过点击屏幕控制小鸟飞行，穿越一系列管道障碍。游戏以极高的难度和令人上瘾的玩法闻名，是移动游戏史上的经典之作。',
        instructions: '点击屏幕或按空格键让小鸟向上飞。松开后小鸟会自然下落。需要精准控制小鸟的高度，穿过管道之间的空隙。碰到管道或地面则游戏结束。每次游戏都会重新开始，挑战你的最高分。',
        author: '社区开源项目',
        license: 'MIT License',
        githubUrl: 'https://github.com/nicbarker/flappy-bird',
        iframeUrl: '/games/flappy-bird/index.html',
        imageUrl: '/images/flappy-bird.svg',
        featured: true,
        date: '2026-01-07'
    },
    {
        id: 'pacman',
        title: '吃豆人 Pacman',
        category: 'arcade',
        categoryName: '街机',
        description: '吃豆人是 1980 年由南梦宫公司发行的经典街机游戏，也是电子游戏史上最具标志性的角色之一。玩家控制吃豆人在迷宫中吃掉所有豆子，同时躲避四只幽灵的追捕。吃到能量豆后可以反过来吃掉幽灵。',
        instructions: '使用键盘方向键（↑↓←→）控制吃豆人在迷宫中移动。吃掉所有豆子即可过关。蓝色能量豆可以让吃豆人暂时获得吃掉幽灵的能力。注意躲避幽灵，被幽灵碰到会失去一条命。',
        author: '社区开源项目',
        license: 'MIT License',
        githubUrl: 'https://github.com/nicbarker/pacman',
        iframeUrl: '/games/pacman/index.html',
        imageUrl: '/images/pacman.svg',
        featured: true,
        date: '2026-01-08'
    },
    {
        id: 'sudoku',
        title: '数独 Sudoku',
        category: 'puzzle',
        categoryName: '益智',
        description: '数独是一款风靡全球的逻辑填数游戏。玩家需要在 9x9 的网格中填入数字 1-9，使得每行、每列和每个 3x3 的宫格内数字都不重复。游戏锻炼逻辑思维和专注力，是经典的脑力训练游戏。',
        instructions: '点击空白格子，然后选择数字填入。每行、每列和每个 3x3 宫格中，数字 1-9 只能出现一次。游戏提供不同难度级别，从入门到专家。使用铅笔模式可以临时标记候选数字。',
        author: '社区开源项目',
        license: 'MIT License',
        githubUrl: 'https://github.com/nicbarker/sudoku',
        iframeUrl: '/games/sudoku/index.html',
        imageUrl: '/images/sudoku.svg',
        featured: false,
        date: '2026-01-09'
    },
    {
        id: 'tic-tac-toe',
        title: '井字棋 Tic-Tac-Toe',
        category: 'strategy',
        categoryName: '策略',
        description: '井字棋是一款历史悠久的经典策略游戏，也是许多人接触的第一款棋类游戏。两名玩家轮流在 3x3 的网格中标记 X 和 O，先将三个标记连成一条直线（横、竖、斜）的玩家获胜。',
        instructions: '点击网格中的空白位置放置你的棋子。先手玩家使用 X，后手玩家使用 O。先将三个棋子连成一条直线（横、竖或斜线）的玩家获胜。如果所有格子被填满且无人获胜，则为平局。',
        author: '社区开源项目',
        license: 'MIT License',
        githubUrl: 'https://github.com/nicbarker/tic-tac-toe',
        iframeUrl: '/games/tic-tac-toe/index.html',
        imageUrl: '/images/tic-tac-toe.svg',
        featured: false,
        date: '2026-01-10'
    }
];

// 按分类获取游戏
function getGamesByCategory(category) {
    return games.filter(game => game.category === category);
}

// 获取推荐游戏
function getFeaturedGames() {
    return games.filter(game => game.featured);
}

// 获取最新游戏（按日期排序）
function getLatestGames() {
    return [...games].sort((a, b) => new Date(b.date) - new Date(a.date));
}

// 搜索游戏
function searchGames(query) {
    const q = query.toLowerCase();
    return games.filter(game => 
        game.title.toLowerCase().includes(q) || 
        game.description.toLowerCase().includes(q) ||
        game.categoryName.includes(q)
    );
}

// 获取游戏详情
function getGameById(id) {
    return games.find(game => game.id === id);
}
