// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000108080808080808080400120000000005090909090909090907000000000000050708050706090a09070000000006000302090507090909090700000606000005090905070c09090907000600000000050909050709010b0307000000000000050909090701090a090205000000001005090606020509090207050000060011050708080805090209070309000000000306060606060206060200030900000000000000000000000000000003060000000000000000000000000000000000100000010000000000000000000006060f00040507000000020300000000000000000705070000020d00030606000000000c02030e000200000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . 2 . 
. . 2 . . . . . . . . . 2 2 . . 
2 2 2 . . . . . . . . 2 . . . . 
. . 2 . . 2 2 . 2 . . . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . 2 2 . . 2 . 2 
. . 2 2 2 . . . 2 2 2 2 . . . . 
. . . . . . . 2 2 2 2 2 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . 2 2 2 
. 2 2 2 . . . 2 2 . . . . . . . 
. 2 2 2 . . 2 . . 2 2 2 . . . . 
. 2 2 . . 2 . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.doorOpenEast,sprites.dungeon.chestClosed,sprites.dungeon.doorClosedNorth,sprites.dungeon.chestOpen], TileScale.Sixteen);
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
