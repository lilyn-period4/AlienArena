// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1300110001080808080808080804190c0f0f0f100f1816050909090909090909070f0f0f120f0f1c1511050708050706090a09070f0f0f0f060f140f170d0209050709090909070f0f06061b0f0f0f10050909050709091a090705180f100f0f0f150f05090905070b01080902050f110f0f0e0f1515050909090701090a070705090f0f0f1b0f18150509060602050909020705090f060f0f0f16130507080808050902090703090f0f100f0f1517030606060606020606021b1c090f0f0f0e0f0f0f0f0f0f0f0f140f0f0f0f0f03060f0f1b0f0f100f0f0f140f0f0f130f0f0f0f0f0f0f1518150f0f010f0f110f0f0f0f0f120f06061615170f130405070f0f0f02030f0f0f0f0f1c0f150f150f0705180f10021c0f0306060f0f100f1510160b021c120f021b0f0f0f0f0f140f0f151617151615151517150f1515110f180f171515171115`, img`
....22...2.......2.
....22...2.......2.
..2.22...2....2..2.
..2.2....2..22...2.
222.2.....2......2.
..2.2.22..2......2.
....22...222...2.2.
....2....222.2...2.
..222...2222.....2.
.......222..2....2.
2222222222..22..22.
................22.
..2..........2222..
.222...22......2...
.22...2..222...2...
.2...2.........2...
2222222222222222...
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestOpen,sprites.dungeon.doorLockedSouth,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.dungeon.floorMixed,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight5,sprites.dungeon.floorLight2,sprites.dungeon.floorLight4,sprites.dungeon.floorDark0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark4,sprites.dungeon.floorDark1,sprites.dungeon.purpleSwitchUp,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.greenOuterSouth0,sprites.castle.tileDarkGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
