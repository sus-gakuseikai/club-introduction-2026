const publish_info = [
  {
    category: 'お知らせ',
    clubs: [
      {
        clubName: '部活動説明会',
        id: 'Osirase', // intro_pngの中の名前。拡張端子はpngのみ
        isMovie: false,
        movieUrl: '',
        links: [
          {
            label: '※参加団体は変更することがあります。',
            url: ''
          }
        ]
      }
    ]
  },
  {
    category: '総務系',
    clubs: [
      {
        clubName: '学生会',
        id: 'Gakuseikai',
        isMovie: false,
        movieUrl: '',
        links: [
          {
            label: '学生会 X',
            url: 'https://x.com/suwa_gakuseikai'
          }
        ]
      },
      {
        clubName: '新風祭実行委員',
        id: 'Shinpusai',
        isMovie: false,
        movieUrl: '',
        links: [
          {
            label: '新風祭実行委員会 X',
            url: 'https://x.com/shinpusai?s=21&t=YkpT3R0_ciyGPLkF71Nqig'
          },
          {
            label: '新風祭実行委員会 Instagram',
            url: 'https://www.instagram.com/suwarika_festival?igsh=cTZ0bm1icjRzNnd4'
          }
        ]
      }
    ]
  },
  {
    category: '運動系',
    clubs: [
       {
        clubName: '野外活動サークル部',
        id: 'Nokuru',
        isMovie: false,
        movieUrl: '',
        links: [
          {
            label: '野外活動サークル X',
            url: 'https://x.com/suwanokuru'
          },
          {
            label: '野外活動サークル インスタグラム',
            url: 'https://www.instagram.com/suwa_nokuru/'
          },
          {
            label: '野外活動サークル ブログ',
            url: 'https://nokuru-sus.tokyo/'
          },
          
        ]
      },
      {
        clubName: 'WORKOUT',
        id: 'Workout',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: '剣道部',
        id: 'Kendou',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: '軟式野球部',
        id: 'Softball',
        isMovie: false,
        movieUrl: '',
        links: [
          {
            label: '軟式野球部 X',
            url: 'https://twitter.com/suwarikaBBC'
          },
          {
            label: '軟式野球部 Instagram',
            url: 'https://www.instagram.com/sus_baseball/'
          },
          {
            label: '部長連絡先',
            url: 't124045@ed.sus.ac.jp'
          }
        ]
      },
      {
        clubName: 'フットサル部',
        id: 'Futsal',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: 'バドミントン部',
        id: 'Badminton',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: '弓道部',
        id: 'Archery',
        isMovie: false,
        movieUrl: '',
        links: [
          {
            label: '弓道部 X',
            url: 'https://x.com/suwarika_kyudo'
          },
          {
            label: '弓道部体験グループLINE',
            url: 'https://line.me/ti/g/EYgsmja6fk'
          }
        ]
      },
      {
        clubName: 'サバイバルゲーム部',
        id: 'Survival_Game',
        isMovie: false,
        movieUrl: '',
        links: [
          {
            label: 'サバイバルゲーム部 X',
            url: 'https://x.com/sus_sarvival?s=21&t=1DRjJxI9fQyVarRTvQ_K6A'
          }
        ]
      },
      {
        clubName: 'バスケットボール部',
        id: 'Basketball',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: '陸上競技部',
        id: 'Track_And_Field',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: '硬式テニス部',
        id: 'Tennis',
        isMovie: false,
        movieUrl: '',
        links: []
      }
    ]
  },
  {
    category: '文化系',
    clubs: [
      {
        clubName: 'TRPG部',
        id: 'TRPG',
        isMovie: false,
        movieUrl: '',
        links: [
          {
            label: 'TRPG部 discord',
            url: 'https://discord.gg/WSTDmNjGYV'
          }
               ]
      },
      {
        clubName: 'リズムゲームサークル',
        id: 'Rhythm_Game',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: 'SuwaGeeks(技術部)',
        id: 'SuwaGeeks',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: 'AIサークル',
        id: 'AI',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: '天文部',
        id: 'Tenmon',
        isMovie: false,
        movieUrl: '',
        links: [
          {
            label: '天文部 Instagram',
            url: 'https://www.instagram.com/sus_astronomical'
          }
        ]
      },
      {
        clubName: 'アンサンブルサークル',
        id: 'Ensemble',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: '文芸部',
        id: 'Literature',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: 'ボードゲーム部',
        id: 'Board_Games',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: '鉄道研究部',
        id: 'Railway',
        isMovie: false,
        movieUrl: '',
        links: [
          {
            label: '鉄道研究部 X',
            url: 'https://x.com/suwarika_azusa'
          },
          {
            label: '鉄道研究部 Instagram',
            url: 'https://www.instagram.com/suwarika_azusa/'
          }
        ]
      },
      {
        clubName: '写真部',
        id: 'Photography',
        isMovie: false,
        movieUrl: '',
        links: []
      },
      {
        clubName: '軽音学部',
        id: 'K-On',
        isMovie: false,
        movieUrl: '',
        links: [
          {
            label: '軽音学部 X',
            url: 'https://x.com/sus_schoolband?s=21'
          },
          {
            label: '軽音学部 Instagram',
            url: 'https://www.instagram.com/sus_schoolband?igsh=bWtvYWRheHpia2xo'
          }
        ]
      },
      {
        clubName: 'チノリカ',
        id: 'Chino_Rika',
        isMovie: false,
        movieUrl: '',
        links: [
          {
            label: 'チノリカ Instagram',
            url: 'https://www.instagram.com/chinorika22?igsh=cmQ2c2xsNmR1aXE2&utm_source=qr'
          }
        ]
      }
    ]
  },
  {
    category: '外部団体',
    clubs: [
    ]
  }
];

const contact_only_list = [
  {name: '学生会', contact: 'suwagakuseikai@gmail.com'},
  {name: '新風祭実行委員会', contact: 'shinpuusai2022@gmail.com'},
  {name: 'WORK OUT部', contact: 't223056@ed.sus.ac.jp'},
  {name: '軟式野球部', contact: 't124045@ed.sus.ac.jp'},
  {name: '陸上競技部', contact: 't225044@ed.sus.ac.jp'},
  {name: '硬式テニス部', contact: 'T223122＠ed.sus.ac.jp'},
  {name: 'ソフトテニス部', contact: 't225060@ed.sus.ac.jp'},
  {name: 'サッカー部', contact: 't225031@ed.sus.ac.jp'},
  {name: 'フットサル部', contact: 'T124117＠ed.sus.ac.jp'},
  {name: 'クライミング部', contact: 'suwarika.climbing@gmail.com'},
  {name: 'バスケットボール部', contact: 't124099@ed.sus.ac.jp'},
  {name: '弓道部', contact: 't223151@ed.sus.ac.jp'},
  {name: '剣道部', contact: 't125159@ed.sus.ac.jp'},
  {name: '卓球部', contact: 't124170@ed.sus.ac.jp'},
  {name: 'サバイバルゲーム部', contact: 't224069@ed.sus.ac.jp'},
  {name: 'バドミントン部', contact: 't225013@ed.sus.ac.jp'},
  {name: 'バレーボール部', contact: 't124076@ed.sus.ac.jp'},
  {name: 'ゴルフ部', contact: 'T222085@ed.sus.ac.jp'},
  {name: 'ボランティ部', contact: 'T224062@ed.sus.ac.jp'},
  {name: 'AIサークル', contact: 't123113@ed.sus.ac.jp'},
  {name: '写真部', contact: 't225058@ed.sus.ac.jp'},
  {name: '軽音楽部', contact: 't123141@ed.sus.ac.jp'},
  {name: '文芸部', contact: 't125201@ed.sus.ac.jp'},
  {name: 'e-sports部', contact: 't125198@ed.sus.ac.jp'},
  {name: 'TRPG部', contact: 'T124171@ed.sus.ac.jp'},
  {name: '鐵道研究会', contact: 't225147@ed.sus.ac.jp'},
  {name: 'アンサンブルサークル', contact: 't224149@ed.sus.ac.jp'},
  {name: 'イラスト・コミック研究部', contact: 't124090@ed.sus.ac.jp'},
  {name: 'JAZZ研究会', contact: 't124017@ed.sus.ac.jp'},
  {name: 'スイーツ研究部', contact: 't123083@ed.sus.ac.jp'},
  {name: 'ロボット研究部', contact: 't224113@ed.sus.ac.jp'},
  {name: 'ボードゲーム部', contact: 't123063@ed.sus.ac.jp'},
  {name: 'ってみた部', contact: 't124170@ed.sus.ac.jp'},
  {name: 'SuwaGeeks（技術部）', contact: 't123113@ed.sus.ac.jp'},
  {name: 'チノリカ', contact: 't124061@ed.sus.ac.jp'},
  {name: '野外活動サークル部', contact: 't124171@ed.sus.ac.jp'},
  {name: 'PolyTalk部', contact: 'susglobalclub2024@gmail.com'},
  {name: '天文部', contact: 't225079@ed.sus.ac.jp'},
  {name: 'リズムゲームサークル', contact: 't124022@ed.sus.ac.jp'},
]
