// Maps game slugs to local thumbnail assets.
// Only assets that physically exist in the project are imported. Missing
// thumbnails fall back to /placeholder.svg so the build never breaks when
// new game slugs are added before their artwork is generated.

// Live casino tiles (these assets exist on disk)
import lightningRoulette from '@/assets/live/lightning-roulette.jpg';
import crazyTime from '@/assets/live/crazy-time.jpg';
import monopolyLive from '@/assets/live/monopoly.jpg';
import blackjackVip from '@/assets/live/blackjack-vip.jpg';
import baccarat from '@/assets/live/baccarat.jpg';
import dreamCatcher from '@/assets/live/dream-catcher.jpg';
import megaBall from '@/assets/live/mega-ball.jpg';
import dealNoDeal from '@/assets/live/deal-no-deal.jpg';
import blackjackThumb from '@/assets/games/blackjack.jpg';
import coinflipThumb from '@/assets/games/coinflip.jpg';
import crashThumb from '@/assets/games/crash.jpg';
import diceThumb from '@/assets/games/dice.jpg';
import dragonTigerThumb from '@/assets/games/dragon-tiger.jpg';
import hiloThumb from '@/assets/games/hilo.jpg';
import jetpackThumb from '@/assets/games/jetpack.jpg';
import kenoThumb from '@/assets/games/keno.jpg';
import limboThumb from '@/assets/games/limbo.jpg';
import minesThumb from '@/assets/games/mines.jpg';
import plinkoThumb from '@/assets/games/plinko.jpg';
import rouletteThumb from '@/assets/games/roulette.jpg';
import towerThumb from '@/assets/games/tower.jpg';
import wheelThumb from '@/assets/games/wheel.jpg';
import slotDefaultThumb from '@/assets/games/slot-default.jpg';
import aztecKingThumb from '@/assets/slots/thumbnails/aztec-king.jpg';
import bigBassThumb from '@/assets/slots/thumbnails/big-bass.jpg';
import bookDeadThumb from '@/assets/slots/thumbnails/book-dead.jpg';
import bookOfFallenThumb from '@/assets/slots/thumbnails/book-of-fallen.jpg';
import buffaloKingThumb from '@/assets/slots/thumbnails/buffalo-king.jpg';
import classicThumb from '@/assets/slots/thumbnails/classic.jpg';
import deadOrAliveThumb from '@/assets/slots/thumbnails/dead-or-alive.jpg';
import dogHouseMegawaysThumb from '@/assets/slots/thumbnails/dog-house-megaways.jpg';
import dogHouseThumb from '@/assets/slots/thumbnails/dog-house.jpg';
import firePortalsThumb from '@/assets/slots/thumbnails/fire-portals.jpg';
import floatingDragonThumb from '@/assets/slots/thumbnails/floating-dragon.jpg';
import fruitPartyThumb from '@/assets/slots/thumbnails/fruit-party.jpg';
import gatesOlympusThumb from '@/assets/slots/thumbnails/gates-olympus.jpg';
import gemsBonanzaThumb from '@/assets/slots/thumbnails/gems-bonanza.jpg';
import gonzoQuestThumb from '@/assets/slots/thumbnails/gonzo-quest.jpg';
import hotFiestaThumb from '@/assets/slots/thumbnails/hot-fiesta.jpg';
import luckyLightningThumb from '@/assets/slots/thumbnails/lucky-lightning.jpg';
import madameDestinyThumb from '@/assets/slots/thumbnails/madame-destiny-megaways.jpg';
import mentalThumb from '@/assets/slots/thumbnails/mental.jpg';
import moneyTrainThumb from '@/assets/slots/thumbnails/money-train.jpg';
import reactoonzThumb from '@/assets/slots/thumbnails/reactoonz.jpg';
import riseOfGizaThumb from '@/assets/slots/thumbnails/rise-of-giza.jpg';
import starburstThumb from '@/assets/slots/thumbnails/starburst.jpg';
import starlightThumb from '@/assets/slots/thumbnails/starlight.jpg';
import sugarRushThumb from '@/assets/slots/thumbnails/sugar-rush.jpg';
import sweetBonanzaThumb from '@/assets/slots/thumbnails/sweet-bonanza.jpg';
import tombstoneThumb from '@/assets/slots/thumbnails/tombstone.jpg';
import wantedDeadThumb from '@/assets/slots/thumbnails/wanted-dead.jpg';
import wildBoosterThumb from '@/assets/slots/thumbnails/wild-booster.jpg';
import wildWestGoldThumb from '@/assets/slots/thumbnails/wild-west-gold.jpg';
import zeusVsHadesThumb from '@/assets/slots/thumbnails/zeus-vs-hades.jpg';

const PLACEHOLDER = '/placeholder.svg';

const MAP: Record<string, string> = {
  // Live casino — real artwork
  'live-lightning-roulette': lightningRoulette,
  'live-crazy-time': crazyTime,
  'live-monopoly': monopolyLive,
  'live-blackjack-vip': blackjackVip,
  'live-baccarat': baccarat,
  'live-dream-catcher': dreamCatcher,
  'live-mega-ball': megaBall,
  'live-deal-no-deal': dealNoDeal,
  // Originals
  'blackjack': blackjackThumb,
  'coinflip': coinflipThumb,
  'crash': crashThumb,
  'dice': diceThumb,
  'dragon-tiger': dragonTigerThumb,
  'hilo': hiloThumb,
  'jetpack': jetpackThumb,
  'keno': kenoThumb,
  'limbo': limboThumb,
  'mines': minesThumb,
  'plinko': plinkoThumb,
  'roulette': rouletteThumb,
  'tower': towerThumb,
  'wheel': wheelThumb,
  // Slots
  'aztec-king': aztecKingThumb,
  'big-bass': bigBassThumb,
  'bigbass-slot': bigBassThumb,
  'book-dead': bookDeadThumb,
  'book-of-fallen': bookOfFallenThumb,
  'buffalo-king': buffaloKingThumb,
  'classic': classicThumb,
  'classic-slot': classicThumb,
  'dead-or-alive': deadOrAliveThumb,
  'dog-house': dogHouseThumb,
  'dog-house-megaways': dogHouseMegawaysThumb,
  'fire-portals': firePortalsThumb,
  'floating-dragon': floatingDragonThumb,
  'fruit-party': fruitPartyThumb,
  'gates-olympus': gatesOlympusThumb,
  'gems-bonanza': gemsBonanzaThumb,
  'gonzo-quest': gonzoQuestThumb,
  'hot-fiesta': hotFiestaThumb,
  'lucky-lightning': luckyLightningThumb,
  'madame-destiny': madameDestinyThumb,
  'mental': mentalThumb,
  'money-train': moneyTrainThumb,
  'reactoonz': reactoonzThumb,
  'rise-of-giza': riseOfGizaThumb,
  'starburst': starburstThumb,
  'starlight': starlightThumb,
  'sugar-rush': sugarRushThumb,
  'sweet-bonanza': sweetBonanzaThumb,
  'tombstone': tombstoneThumb,
  'wanted-dead': wantedDeadThumb,
  'wild-booster': wildBoosterThumb,
  'wild-west-gold': wildWestGoldThumb,
  'zeus-vs-hades': zeusVsHadesThumb,
};

export function getGameThumbnail(slug: string, category?: string, fallback?: string | null): string {
  if (MAP[slug]) return MAP[slug];
  if (fallback) return fallback;
  if (category === 'slot') return slotDefaultThumb;
  return PLACEHOLDER;
}
