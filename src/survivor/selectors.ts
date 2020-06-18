import {createSelector} from '@reduxjs/toolkit';
import {SurvivorState} from './get-slice';

const LOCATIONS = [
  {
    title: 'Starting',
    data: [
      {
        id: 'cloth',
        name: 'Cloth',
        imageUrl: 'https://imgur.com/9jQc0IC.png',
        typeId: 'gear',
      },
      {
        id: 'foundingStone',
        name: 'Founding Stone',
        imageUrl: 'https://imgur.com/2zsXe2N.png',
        typeId: 'gear',
      },
    ],
  },
  {
    title: 'Weapon Crafter',
    data: [
      {
        id: 'couterweightedAxe',
        name: 'Counterweighted Axe',
        imageUrl: 'https://imgur.com/39cSWbq.png',
        typeId: 'gear',
      },
      {
        id: 'fingerOfgod',
        name: 'finger of God',
        imageUrl: 'https://imgur.com/vZAwyfV.png',
        typeId: 'gear',
      },
      {
        id: 'rainbowKatana',
        name: 'Rainbow Katana',
        imageUrl: 'https://imgur.com/AVJmCSN.png',
        typeId: 'gear',
        left: 'red',
      },
      {
        id: 'scrapDagger',
        name: 'Scrap Dagger',
        imageUrl: 'https://imgur.com/f0kyO50.png',
        typeId: 'gear',
        right: 'red',
        bottom: 'red',
      },
      {
        id: 'scrapSword',
        name: 'Scrap Sword',
        imageUrl: 'https://imgur.com/Fs1jftj.png',
        typeId: 'gear',
        top: 'blue',
      },
      {
        id: 'skullcapHammer',
        name: 'Skullcap Hammer',
        imageUrl: 'https://imgur.com/071d6fE.png',
        typeId: 'gear',
        bottom: 'green',
      },
      {
        id: 'whistlingMace',
        name: 'Whistling Mace',
        imageUrl: 'https://imgur.com/t2QUvMY.png',
        typeId: 'gear',
        bottom: 'green',
      },
      {
        id: 'zanbato',
        name: 'Zanbato',
        imageUrl: 'https://imgur.com/rxvY6Hc.png',
        typeId: 'gear',
        top: 'red',
        right: 'green',
      },
      {
        id: 'bloodSheath',
        name: 'Blood Shealth',
        imageUrl: 'https://imgur.com/XwyOxOa.png',
        typeId: 'gear',
        left: 'black',
      },
    ],
  },
  {
    title: 'Stone Circle',
    data: [
      {
        id: 'beastKnuckle',
        name: 'Beast Knuckle',
        imageUrl: 'https://imgur.com/09dRCMs.png',
        typeId: 'gear',
      },
      {
        id: 'bloodPaint',
        name: 'Blood Paint',
        imageUrl: 'https://imgur.com/aelkCmq.png',
        typeId: 'gear',
        left: 'black',
        right: 'black',
      },
      {
        id: 'blueCharm',
        name: 'Blue Charm',
        imageUrl: 'https://imgur.com/xJRP5YP.png',
        typeId: 'gear',
      },
      {
        id: 'boneEarrings',
        name: 'Bone Earrings',
        imageUrl: 'https://imgur.com/mpetEBT.png',
        typeId: 'gear',
      },
      {
        id: 'bossMehndi',
        name: 'Boss Mehndi',
        imageUrl: 'https://imgur.com/6UKyazf.png',
        typeId: 'gear',
      },
      {
        id: 'greenCharm',
        name: 'Green Charm',
        imageUrl: 'https://imgur.com/1Tz05E6.png',
        typeId: 'gear',
      },
      {
        id: 'lanceOfLonginus',
        name: 'Lance of Longinus',
        imageUrl: 'https://imgur.com/Zsjf1Yv.png',
        typeId: 'gear',
      },
      {
        id: 'redCharm',
        name: 'Red Charm',
        imageUrl: 'https://imgur.com/eC9WC7L.png',
        typeId: 'gear',
      },
      {
        id: 'screamingBracers',
        name: 'Screaming Bracer',
        imageUrl: 'https://imgur.com/jqONk2S.png',
        typeId: 'gear',
        top: 'green',
        left: 'red',
      },
      {
        id: 'screamingCoat',
        name: 'Screaming Coat',
        imageUrl: 'https://imgur.com/jkpRPMb.png',
        typeId: 'gear',
        top: 'blue',
        left: 'green',
        right: 'blue',
        bottom: 'green',
      },
      {
        id: 'screamingHorns',
        name: 'Screaming Horns',
        imageUrl: 'https://imgur.com/PAeYNlQ.png',
        typeId: 'gear',
        bottom: 'green',
      },
      {
        id: 'screamingLegWarmers',
        name: 'Screaming Leg Warmers',
        imageUrl: 'https://imgur.com/7vQBWX8.png',
        typeId: 'gear',
        top: 'blue',
        right: 'red',
      },
      {
        id: 'screamingSkirt',
        name: 'Screaming Skirt',
        imageUrl: 'https://imgur.com/SBIzDB9.png',
        typeId: 'gear',
        bottom: 'blue',
        right: 'green',
      },
    ],
  },
  {
    title: 'Skinnery',
    data: [
      {
        id: 'bandages',
        name: 'Bandages',
        imageUrl: 'https://imgur.com/UndwGMz.png',
        typeId: 'gear',
        left: 'blue',
        bottom: 'green',
      },
      {
        id: 'rawhideBoots',
        name: 'Rawhide Boots',
        imageUrl: 'https://imgur.com/wnq1TwU.png',
        typeId: 'gear',
      },
      {
        id: 'rawhideDrum',
        name: 'Rawhide Drum',
        imageUrl: 'https://imgur.com/gYKSqXF.png',
        typeId: 'gear',
        left: 'green',
      },
      {
        id: 'rawhideGloves',
        name: 'Rawhide Gloves',
        imageUrl: 'https://imgur.com/rHGLjEv.png',
        typeId: 'gear',
        left: 'red',
      },
      {
        id: 'rawhideHeadband',
        name: 'Rawhide Headband',
        imageUrl: 'https://imgur.com/gPO2txw.png',
        typeId: 'gear',
        bottom: 'blue',
      },
      {
        id: 'rawhidePants',
        name: 'Rawhide Pants',
        imageUrl: 'https://imgur.com/IHCUhME.png',
        typeId: 'gear',
      },
      {
        id: 'rawhideVest',
        name: 'Rawhide Vest',
        imageUrl: 'https://imgur.com/H6IMoy0.png',
        typeId: 'gear',
        top: 'blue',
        right: 'red',
      },
      {
        id: 'rawhideWhip',
        name: 'Rawhide Whip',
        imageUrl: 'https://imgur.com/z3XlTvH.png',
        typeId: 'gear',
      },
    ],
  },
  {
    title: 'Organ Grinder',
    data: [
      {
        id: 'driedAcanthus',
        name: 'Dried Acanthus',
        imageUrl: 'https://imgur.com/OOjmlWH.png',
        typeId: 'gear',
      },
      {
        id: 'fecalSalve',
        name: 'Fecal Salve',
        imageUrl: 'https://imgur.com/TokbrrA.png',
        typeId: 'gear',
        left: 'blue',
      },
      {
        id: 'luckyCharm',
        name: 'Luck Charm',
        imageUrl: 'https://imgur.com/r8nEPsZ.png',
        typeId: 'gear',
        left: 'blue',
        right: 'blue',
      },
      {
        id: 'monsterGrease',
        name: 'Monster Grease',
        imageUrl: 'https://imgur.com/6E1PcCb.png',
        typeId: 'gear',
        left: 'green',
      },
      {
        id: 'monsterToothNecklace',
        name: 'Monster Tooth Necklace',
        imageUrl: 'https://imgur.com/UnxARn0.png',
        typeId: 'gear',
        right: 'red',
      },
    ],
  },
  {
    title: 'Plumery',
    data: [
      {
        id: 'birdBread',
        name: 'Bird Bread',
        imageUrl: 'https://imgur.com/ta0pEBS.png',
        typeId: 'gear',
        right: 'green',
      },
      {
        id: 'bloomSphere',
        name: 'Bloom Sphere',
        imageUrl: 'https://imgur.com/35LsJO2.png',
        typeId: 'gear',
        left: 'green',
        right: 'blue',
      },
      {
        id: 'crestCrown',
        name: 'Crest Crown',
        imageUrl: 'https://imgur.com/rAvbvci.png',
        typeId: 'gear',
        left: 'red',
        right: 'green',
        top: 'blue',
        bottom: 'blue',
      },
      {
        id: 'featherMantle',
        name: 'Feather Mantle',
        imageUrl: 'https://imgur.com/82dRgxP.png',
        typeId: 'gear',
        left: 'blue',
        right: 'green',
        bottom: 'red',
      },
      {
        id: 'hollowpointArrow',
        name: 'Hollowpoint Arrow',
        imageUrl: 'https://imgur.com/XQ0E5Pf.png',
        typeId: 'gear',
      },
      {
        id: 'featherShield',
        name: 'Feather Shield',
        imageUrl: 'https://imgur.com/4GIp3WT.png',
        typeId: 'gear',
      },
      {
        id: 'hollowSword',
        name: 'Hollow Sword',
        imageUrl: 'https://imgur.com/qTiMXCl.png',
        typeId: 'gear',
      },
      {
        id: 'hoursRing',
        name: 'Hours Ring',
        imageUrl: 'https://imgur.com/5e8lQHG.png',
        typeId: 'gear',
      },
      {
        id: 'phoenixFaulds',
        name: 'Phoenix Faulds',
        imageUrl: 'https://imgur.com/pyIizbt.png',
        typeId: 'gear',
      },
      {
        id: 'phoenixGauntlet',
        name: 'Phoenix Gauntlet',
        imageUrl: 'https://imgur.com/pi8IjgH.png',
        typeId: 'gear',
      },
      {
        id: 'phoenixGreaves',
        name: 'Phoenix Greaves',
        imageUrl: 'https://imgur.com/SpUIxHD.png',
        typeId: 'gear',
        right: 'red',
      },
      {
        id: 'arcBow',
        name: 'Arc Bow',
        imageUrl: 'https://imgur.com/Zww7KQK.png',
        typeId: 'gear',
        left: 'red',
        right: 'green',
      },
      {
        id: 'phoenixHelm',
        name: 'Phoenix Helm',
        imageUrl: 'https://imgur.com/4wkdYy4.png',
        typeId: 'gear',
        bottom: 'blue',
      },
      {
        id: 'phoenixPlackart',
        name: 'Phoenix Plackart',
        imageUrl: 'https://imgur.com/pvV31Ct.png',
        typeId: 'gear',
        top: 'blue',
        left: 'green',
        right: 'red',
      },
      {
        id: 'sonicTomahawk',
        name: 'Sonic Tomahawk',
        imageUrl: 'https://imgur.com/rnCRVT7.png',
        typeId: 'gear',
        left: 'red',
      },
    ],
  },
  {
    title: 'Leather Worker',
    data: [
      {
        id: 'hunterWhip',
        name: 'Hunter Whip',
        imageUrl: 'https://imgur.com/yKJAAod.png',
        typeId: 'gear',
        top: 'blue',
        right: 'blue',
      },
      {
        id: 'leatherBoots',
        name: 'Leather Boots',
        imageUrl: 'https://imgur.com/j1DygQO.png',
        typeId: 'gear',
        left: 'green',
        right: 'green',
      },
      {
        id: 'leatherBracers',
        name: 'Leather Bracers',
        imageUrl: 'https://imgur.com/pRHwx9O.png',
        typeId: 'gear',
        right: 'green',
      },
      {
        id: 'leatherCuirass',
        name: 'Leather Cuirass',
        imageUrl: 'https://imgur.com/gEzpWzA.png',
        typeId: 'gear',
        top: 'red',
        bottom: 'blue',
      },
      {
        id: 'leatherMask',
        name: 'Leather Mask',
        imageUrl: 'https://imgur.com/tJ5b60I.png',
        typeId: 'gear',
        top: 'blue',
        bottom: 'red',
      },
      {
        id: 'leatherSkirt',
        name: 'Leather Skirt',
        imageUrl: 'https://imgur.com/ulyDOui.png',
        typeId: 'gear',
        bottom: 'green',
      },
      {
        id: 'roundLeatherShield',
        name: 'Round Leather Shield',
        imageUrl: 'https://imgur.com/77wcDen.png',
        typeId: 'gear',
        top: 'green',
      },
    ],
  },
  {
    title: 'Mask Maker',
    data: [
      {
        id: 'deathMask',
        name: 'Death Mask',
        imageUrl: 'https://imgur.com/1Mb0EBH.png',
        typeId: 'gear',
      },
      {
        id: 'godMask',
        name: 'God Mask',
        imageUrl: 'https://imgur.com/Xp5ULMd.png',
        typeId: 'gear',
      },
      {
        id: 'manMask',
        name: 'Man Mask',
        imageUrl: 'https://imgur.com/xXrlXqi.png',
        typeId: 'gear',
      },
      {
        id: 'phoenixMask',
        name: 'Phoenix Mask',
        imageUrl: 'https://imgur.com/P5Y9MjR.png',
        typeId: 'gear',
      },
      {
        id: 'antelopeMask',
        name: 'Antelope Mask',
        imageUrl: 'https://imgur.com/x298A1F.png',
        typeId: 'gear',
      },
    ],
  },
  {
    title: 'Bone Smith',
    data: [
      {
        id: 'boneSickle',
        name: 'Bone Sickle',
        imageUrl: 'https://imgur.com/X3iyGQ6.png',
        typeId: 'gear',
        top: 'green',
      },
      {
        id: 'skullHelm',
        name: 'Skull Helm',
        imageUrl: 'https://imgur.com/nM3aCUp.png',
        typeId: 'gear',
        bottom: 'red',
      },
      {
        id: 'boneAxe',
        name: 'Bone Axe',
        imageUrl: 'https://imgur.com/hxGp8O5.png',
        typeId: 'gear',
        left: 'red',
      },
      {
        id: 'boneBlade',
        name: 'Bone Blade',
        imageUrl: 'https://imgur.com/ZMCGimQ.png',
        typeId: 'gear',
        left: 'red',
      },
      {
        id: 'boneDagger',
        name: 'Bone Dagger',
        imageUrl: 'https://imgur.com/VbryH2W.png',
        typeId: 'gear',
        left: 'red',
        top: 'red',
      },
      {
        id: 'boneDart',
        name: 'Bone Dart',
        imageUrl: 'https://imgur.com/bQxu4aS.png',
        typeId: 'gear',
        left: 'red',
      },
      {
        id: 'bonePickaxe',
        name: 'Bone Pickaxe',
        imageUrl: 'https://imgur.com/zOVXeyA.png',
        typeId: 'gear',
        top: 'green',
      },
    ],
  },
  {
    title: 'Catarium',
    data: [
      {
        id: 'catFangKnife',
        name: 'Cat Fang Knife',
        imageUrl: 'https://imgur.com/zvSQGxy.png',
        typeId: 'gear',
        top: 'red',
        left: 'red',
        right: 'red',
        bottom: 'red',
      },
      {
        id: 'catGutBow',
        name: 'Cat Gut Bow',
        imageUrl: 'https://imgur.com/M1btKnw.png',
        typeId: 'gear',
        top: 'blue',
      },
      {
        id: 'clawHeadArrow',
        name: 'Claw Head Arrow',
        imageUrl: 'https://imgur.com/mqEsIr0.png',
        typeId: 'gear',
      },
      {
        id: 'frenzyDrink',
        name: 'Frenzy Drink',
        imageUrl: 'https://imgur.com/382IiKy.png',
        typeId: 'gear',
      },
      {
        id: 'kingSpear',
        name: 'King Spear',
        imageUrl: 'https://imgur.com/tQOGMWM.png',
        typeId: 'gear',
        right: 'red',
      },
      {
        id: 'lionBeastKatar',
        name: 'Lion Beast Katar',
        imageUrl: 'https://imgur.com/EQmL8PU.png',
        typeId: 'gear',
      },
      {
        id: 'lionHeaddress',
        name: 'Lion Headdress',
        imageUrl: 'https://imgur.com/47j5ROx.png',
        typeId: 'gear',
      },
      {
        id: 'lionSkinCloak',
        name: 'Lion Skin Cloak',
        imageUrl: 'https://imgur.com/eatUtnI.png',
        typeId: 'gear',
        right: 'green',
      },
      {
        id: 'whiskerHarp',
        name: 'Whisker Harp',
        imageUrl: 'https://imgur.com/9vp5J9H.png',
        typeId: 'gear',
        left: 'blue',
      },
      {
        id: 'whiteLionBoots',
        name: 'White Lion Boots',
        imageUrl: 'https://imgur.com/dw4opZc.png',
        typeId: 'gear',
        right: 'red',
        bottom: 'red',
      },
      {
        id: 'whiteLionCoat',
        name: 'White Lion Coat',
        imageUrl: 'https://imgur.com/G4n82wU.png',
        typeId: 'gear',
        top: 'blue',
      },
      {
        id: 'whiteLionGauntlet',
        name: 'White Lion Gauntlet',
        imageUrl: 'https://imgur.com/1EmG2bA.png',
        typeId: 'gear',
      },
      {
        id: 'whiteLionHelm',
        name: 'White Lion Helm',
        imageUrl: 'https://imgur.com/oEt3Btb.png',
        typeId: 'gear',
        bottom: 'red',
      },
      {
        id: 'whiteLionSkirt',
        name: 'White Lion Skirt',
        imageUrl: 'https://imgur.com/0fvrLTm.png',
        typeId: 'gear',
        left: 'red',
        right: 'red',
      },
      {
        id: 'catEyeCirclet',
        name: 'Cat Eye Circlet',
        imageUrl: 'https://imgur.com/xdkphRD.png',
        typeId: 'gear',
        left: 'blue',
      },
    ],
  },
  {
    title: 'Barber Surgeon',
    data: [
      {
        id: 'bugTrap',
        name: 'Bug Trap',
        imageUrl: 'https://imgur.com/U4GQDgW.png',
        typeId: 'gear',
      },
      {
        id: 'firstAidKit',
        name: 'First Aid Kit',
        imageUrl: 'https://imgur.com/4Jrd7Nb.png',
        typeId: 'gear',
        left: 'green',
        right: 'green',
        top: 'green',
        bottom: 'green',
      },
      {
        id: 'elderEarrings',
        name: 'Elder Earrings',
        imageUrl: 'https://imgur.com/wjP18Kf.png',
        typeId: 'gear',
        left: 'red',
        right: 'green',
        bottom: 'blue',
      },
      {
        id: 'speedPowder',
        name: 'Speed Powder',
        imageUrl: 'https://imgur.com/U1ZI21Z.png',
        typeId: 'gear',
        right: 'blue',
      },
      {
        id: 'scavengerKit',
        name: 'Scavenger Kit',
        imageUrl: 'https://imgur.com/SjxofgF.png',
        typeId: 'gear',
        bottom: 'green',
      },
      {
        id: 'muskBomb',
        name: 'Musk Bomb',
        imageUrl: 'https://imgur.com/2CTC4KR.png',
        typeId: 'gear',
      },
      {
        id: 'brainMint',
        name: 'Brain Mint',
        imageUrl: 'https://imgur.com/RhsZHSt.png',
        typeId: 'gear',
        top: 'green',
        left: 'blue',
      },
      {
        id: 'almanac',
        name: 'Almanac',
        imageUrl: 'https://imgur.com/hjrXXvX.png',
        typeId: 'gear',
        right: 'blue',
      },
    ],
  },
  {
    title: 'Blacksmith',
    data: [
      {
        id: 'perfectSlayer',
        name: 'Perfect Slayer',
        imageUrl: 'https://imgur.com/sL748DF.png',
        typeId: 'gear',
        bottom: 'red',
      },
      {
        id: 'ringWhip',
        name: 'Ring Whip',
        imageUrl: 'https://imgur.com/kBBPZRS.png',
        typeId: 'gear',
        left: 'blue',
      },
      {
        id: 'scrapShield',
        name: 'Scrap Shield',
        imageUrl: 'https://imgur.com/IpXaIt5.png',
        typeId: 'gear',
        right: 'red',
      },
      {
        id: 'lanternDagger',
        name: 'Lantern Dagger',
        imageUrl: 'https://imgur.com/lUhb4oX.png',
        typeId: 'gear',
        left: 'red',
      },
      {
        id: 'lanternGauntlets',
        name: 'Lantern Gauntlets',
        imageUrl: 'https://imgur.com/qHu36qC.png',
        typeId: 'gear',
        left: 'green',
      },
      {
        id: 'lanternGlaive',
        name: 'Lantern Glaive',
        imageUrl: 'https://imgur.com/eHWm8TD.png',
        typeId: 'gear',
        bottom: 'green',
      },
      {
        id: 'lanternGreaves',
        name: 'Lantern Greaves',
        imageUrl: 'https://imgur.com/D4W5TwL.png',
        typeId: 'gear',
        top: 'blue',
        left: 'red',
        right: 'red',
      },
      {
        id: 'lanternHelm',
        name: 'Lantern Helm',
        imageUrl: 'https://imgur.com/ahnNZAP.png',
        typeId: 'gear',
        bottom: 'blue',
      },
      {
        id: 'lanternMail',
        name: 'Lantern Mail',
        imageUrl: 'https://imgur.com/1LO1Fwb.png',
        typeId: 'gear',
        right: 'green',
      },
      {
        id: 'lanternSword',
        name: 'Lantern Sword',
        imageUrl: 'https://imgur.com/z7EdRD8.png',
        typeId: 'gear',
        left: 'red',
      },
      {
        id: 'lanternCuirass',
        name: 'Lantern Cuirass',
        imageUrl: 'https://imgur.com/ndzCHjD.png',
        typeId: 'gear',
        left: 'green',
        right: 'green',
        top: 'blue',
        bottom: 'blue',
      },
      {
        id: 'dragonSlayer',
        name: 'Dragon Slayer',
        imageUrl: 'https://imgur.com/8bWtJGc.png',
        typeId: 'gear',
        right: 'red',
        top: 'blue',
      },
      {
        id: 'beaconShield',
        name: 'Beacon Shield',
        imageUrl: 'https://imgur.com/pQPur7S.png',
        typeId: 'gear',
      },
    ],
  },
];

const getGears = createSelector<{survivor: SurvivorState}, any, any>(
  state => state.survivor,
  survivor => survivor?.gears,
);

export default class {
  static getGears = getGears;
  static allGears = LOCATIONS;
}
