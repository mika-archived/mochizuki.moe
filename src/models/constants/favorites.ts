import { sortBy } from "lodash";

import { ICategorizedFavorites, IFavorite } from "@/models/favorite";

const favorites: ICategorizedFavorites = {
  categories: [
    {
      name: "Anime",
      favorites: sortBy([
        {
          name: "ALDNOAH.ZERO",
          href: "http://www.aldnoahzero.com/"
        },
        {
          name: "Angel Beats!",
          href: "http://www.angelbeats.jp/"
        },
        {
          name: "宇宙よりも遠い場所",
          href: "http://yorimoi.com/"
        },
        {
          name: "アイドルマスター シンデレラガールズ",
          href: "https://imas-cinderella.com/"
        },
        {
          name: "楽園追放 -Expelled from Paradise-",
          href: "http://rakuen-tsuiho.com/"
        },
        {
          name: "ソードアート・オンライン",
          href: "https://www.swordart-online.net/"
        },
        {
          name: "〈物語〉シリーズ",
          href: "https://www.monogatari-series.com/"
        },
        {
          name: "ノーゲーム・ノーライフ",
          href: "http://ngnl.jp/"
        },
        {
          name: "STEINS;GATE",
          href: "http://steinsgate.jp/"
        },
        {
          name: "ヴァイオレット・エヴァーガーデン",
          href: "http://violet-evergarden.jp/"
        },
        {
          name: "言の葉の庭",
          href: "http://www.kotonohanoniwa.jp/"
        }
      ] as IFavorite[], (w: IFavorite) => w.name.toLocaleLowerCase())
    },
    {
      name: "Character",
      favorites: sortBy([
        {
          name: "望月杏奈",
          href: "https://dic.pixiv.net/a/%E6%9C%9B%E6%9C%88%E6%9D%8F%E5%A5%88"
        },
        {
          name: "ユイ (Angel Beats!)",
          href: "https://dic.pixiv.net/a/%E3%83%A6%E3%82%A4%28AngelBeats%21%29"
        },
        {
          name: "双葉杏",
          href: "https://dic.pixiv.net/a/%E5%8F%8C%E8%91%89%E6%9D%8F"
        },
        {
          name: "猫宮ひなた",
          href: "https://dic.pixiv.net/a/%E7%8C%AB%E5%AE%AE%E3%81%B2%E3%81%AA%E3%81%9F"
        },
        {
          name: "ロボ子さん",
          href: "https://dic.pixiv.net/a/%E3%83%AD%E3%83%9C%E5%AD%90%E3%81%95%E3%82%93"
        },
        {
          name: "ソフィー・ノイエンミュラー",
          // tslint:disable-next-line:max-line-length
          href: "https://dic.pixiv.net/a/%E3%82%BD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%BB%E3%83%8E%E3%82%A4%E3%82%A8%E3%83%B3%E3%83%9F%E3%83%A5%E3%83%A9%E3%83%BC"
        },
        {
          name: "初音ミク",
          href: "https://dic.pixiv.net/a/%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF"
        }
      ] as IFavorite[], (w: IFavorite) => w.name.toLocaleLowerCase())
    },
    {
      name: "Music",
      favorites: sortBy([
        {
          name: "supercell",
          href: "http://www.supercell.jp/"
        },
        {
          name: "ClariS",
          href: "http://www.clarismusic.jp/"
        },
        {
          name: "LiSA",
          href: "http://www.lxixsxa.com/"
        },
        {
          name: "cosMo@暴走P",
          href: "http://chemsys.cc/"
        },
        {
          name: "キノシタ",
          href: "https://www.youtube.com/channel/UCvy_1uRgNNu-h3JJCJOGfpw"
        },
        {
          name: "SawanoHiroyuki[nZk]",
          href: "http://www.sh-nzk.net/"
        },
        {
          name: "TrySail",
          href: "https://trysail.jp/"
        },
        {
          name: "new generations",
          // tslint:disable-next-line:max-line-length
          href: "https://dic.pixiv.net/a/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3"
        },
        {
          name: "乙女ストーム！",
          href: "https://dic.pixiv.net/a/%E4%B9%99%E5%A5%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%A0%21"
        },
        {
          name: "40meterP",
          href: "https://www.youtube.com/channel/UCG09qajPDZdPtLsTkW7mJQA"
        }
      ] as IFavorite[], (w: IFavorite) => w.name.toLocaleLowerCase())
    },
    {
      name: "Playlists",
      favorites: sortBy([
        {
          name: "VOCALOID on YouTube",
          href: "https://www.youtube.com/playlist?list=PL2t1NYPsZqCOxjK1fpOOREWM9az9xtzOE"
        },
        {
          name: "SoundCloud",
          href: "https://soundcloud.com/mikazuki_f/likes"
        },
        {
          name: "VOCALOID on niconico",
          href: "http://www.nicovideo.jp/mylist/61087753"
        }
      ] as IFavorite[], (w: IFavorite) => w.name.toLocaleLowerCase())
    }
  ]
};

export {
  favorites
};
