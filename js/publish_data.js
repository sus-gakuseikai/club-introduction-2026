const publish_info = [
  {
    category: 'お知らせ',
    clubs: [
      { clubName: '部活動説明会',
        id: 'explanation',//intro_pngの中の名前。拡張端子はpngのみ
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: '※参加団体は変更することがあります。',
              url: ''
            },
        ]
      },
    ]
  },
  
  {
    category: '総務系',
    clubs: [
      { clubName: '学生会',
        id: 'gakuseikai',//intro_pngの中の名前。拡張端子はpngのみ
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: 'X(旧Twitter)',
              url: 'https://x.com/suwa_gakuseikai?s=20'
            },
          {
              label: 'Instagram',
              url: 'https://www.instagram.com/suwagakuseikai/'
            },
        ]
      },
      { clubName: '新風祭実行委員',
        id: 'shinpusai',//intro_pngの中の名前。拡張端子はpngのみ
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
            },{
              label: '新風祭実行委員会 ホームページ',
              url: 'https://recsuwa.net/'
            },
        ]
      },
    ]
  },
  {
    category: '運動系',
    clubs: [
      { clubName: 'WORKOUT',
        id: 'workout',
        isMovie: false,
        movieUrl: '',
        links: [
            {
            },
        ]
      },
      { clubName: '軟式野球部',
        id: 'softball_baseball',
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: '軟式野球部X（旧Twitter）',
              url: 'https://twitter.com/suwarikaBBC'
            },
            {
              label: '軟式野球部Instagram',
              url: 'https://www.instagram.com/sus_baseball/'
            },
        ]
      },
       { clubName: 'フットサル',
        id: 'futsal',
        isMovie: false,
        movieUrl: '',
        links: [
            {
            },
        ]
      },
       { clubName: 'バドミントン部',
        id: 'badminton',
        isMovie: false,
        movieUrl: '',
        links: [
            {
            },
        ]
      },
      { clubName: 'クライミング部',
        id: 'climbing',
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: 'クライミング部X（旧Twitter）',
              url: 'https://x.com/SuwarikaClimb'
            },
        ]
      },
       { clubName: '弓道部',
        id: 'kyudo',
        isMovie: false,
        movieUrl: '',
        links: [
            {
            },
        ]
      },
      { clubName: 'サバイバルゲーム部',
        id: 'survival',
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: 'サバイバルゲーム部Twitter',
              url: 'https://x.com/sus_sarvival?s=21&t=1DRjJxI9fQyVarRTvQ_K6A'
            },
        ]
      },
      { clubName: '剣道部',
        id: 'kendo',
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: '剣道部連絡先',
              url: 'kendo.suwarika@gmail.com'
            },
        ]
      },
       { clubName: 'ゴルフ部',
        id: 'golf',
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: 'ゴルフ部 Instagram',
              url: 'https://www.instagram.com/sus_golfclub/'
            },
        ]
      },
       { clubName: 'サッカー部',
        id: 'soccer',
        isMovie: false,
        movieUrl: '',
        links: [
            {
            },
        ]
      },
       { clubName: 'テニス部',
        id: 'tennis',
        isMovie: false,
        movieUrl: '',
        links: [
            {
            },
        ]
      },
       { clubName: 'ソフトテニス部',
        id: 'soft_tennis',
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: 'ソフトテニス部Instagram',
              url: 'https://www.instagram.com/sus_softtennnnnnis/profilecard/?igsh=cmpiYmR2eWNpcWx1'
            },
            {
              label: 'ソフトテニス部X(旧Twitter)',
              url: 'https://x.com/suwarikasoftten?s=11&t=G4qyaVHU1qU0DQaKFOKpWg'
            },
        ]
      },
    ]
  },
  {
    category: "文化系",
    clubs: [
      { clubName: 'JAZZ研究会',
        id: 'jazz',
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: 'Jazz研究会Instagram',
              url: 'https://www.instagram.com/jazz_ken_tus/'
            },
            {
              label: 'Jazz研究会SOLA',
              url: 'https://sola.sus.ac.jp/tag/index.php?tc=1&tag=JAZZ研究会'
            },
        ]
      },
     { clubName: 'SUWAGEEKS',
        id: 'suwageeks',
        isMovie: false,
        movieUrl: '',
        links: [
            {
            },
        ]
      },
       { clubName: 'AIサークル',
        id: 'AI',
        isMovie: false,
        movieUrl: '',
        links: [
            {
            },
        ]
      },
    　{ clubName: 'ボードゲーム部',
        id: 'board_game',
        isMovie: false,
        movieUrl: '',
        links: [
            {
            },
        ]
      },
       { clubName: 'ロボット研究部',
        id: 'robot',
        isMovie: false,
        movieUrl: '',
        links: [
            {
            },
        ]
      },
       { clubName: 'e-Sports部',
        id: 'esport',//名前は適当
        isMovie: true,
        movieUrl: 'https://www.youtube.com/embed/-1mw_ajWyKA',//埋め込みurl
        links: [
          {
          },
        ]
      },
       { clubName: '写真部',
        id: 'photograph',//intro_pngの中のファイル名。拡張端子はpngのみ
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: '写真部X',
              url: 'https://x.com/suwarika_photo'
            },
        ]
      },
       { clubName: '軽音学部',
        id: 'K-ON',
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: '軽音部 X',
              url: 'https://x.com/sus_schoolband'
            },
            {
              label: '軽音部 YouTube',
              url: 'https://www.youtube.com/channel/UCpUM8-AZ0zxWZbyvgnzLMdg'
            },
            {
              label: '軽音部 Instagram',
              url: 'https://www.instagram.com/sus_schoolband/'
            },
        ]
      },
       { clubName: 'TRPG部',
        id: 'TRPG',
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: '連絡先（部長：渡辺）',
              url: 't124171@ed.sus.ac.jp'
            },
        ]
      },
      { clubName: 'ってみた部',
        id: 'ttemita',
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: 'ってみた部 X',
              url: 'http://x.com/ttemitabu_tus'
            },
            {
              label: 'ってみた部 Youtube',
              url: 'https://www.youtube.com/channel/UCwiwpf8uEk4lI3LpV3KL7QQ'
            },
            {
              label: 'ってみた部 Instagram',
              url: 'https://www.instagram.com/ttemitabu?igsh=MTBkOW5vc3ljM29wYw%3D%3D&utm_source=qr'
            },
        ]
      },
      { clubName: 'Poly Talk部',
        id: 'poly_talk',
        isMovie: false,
        movieUrl: '',
        links: [
            {
              label: 'Poly Talk部お問い合わせform',
              url: 'https://docs.google.com/forms/d/e/1FAIpQLScSH6CpjA50RyCo3boCq267bebIl6O8HaVp7zwNKtlN8z31Xg/viewform?usp=dialog'
            },
        ]
      },
      { clubName: 'コミック研究部',
        id: 'comic',
        isMovie: false,
        movieUrl: '',
        links: [
            {
            },
        ]
      },
    ]
  },
  {
    category: "外部団体",
    clubs: [

    ]
  },
]
