controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    music.magicWand.playUntilDone()
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite.bottom < otherSprite.y) {
        sprite.vy = -100
    } else {
        info.changeLifeBy(-1)
    }
})
let myEnemy: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ...................cc...
    ...............cccc63c..
    ..............c633336c..
    ..........cc.c6cc33333c.
    .........b55c6c55c33333c
    .........ff5c6c5ff33333c
    .........ff5c6c5ff6333cc
    .........b553c355c6666cc
    ..........b55355c333333c
    .........cc55555bcc3333c
    ........c5545554b55c33c.
    ........b54b4444bb5cbb..
    ........c455b4b5554c45b.
    ........c555c4c555c4c5c.
    ........c5555c5555c4c5c.
    .........ccccccccc..ccc.
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(4)
mySprite.ay = 500
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorLockedSouth)
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(sprites.dungeon.collectibleBlueCrystal)) {
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy, sprites.dungeon.greenOuterSouth0)
    myEnemy.follow(mySprite, 40)
}
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Bottom)) {
            if (value.vx < 0 && value.tileKindAt(TileDirection.Left, sprites.dungeon.collectibleBlueCrystal)) {
                value.vy = -150
            } else if (value.vx < 0 && value.tileKindAt(TileDirection.Left, sprites.dungeon.collectibleBlueCrystal)) {
                value.vy = -150
            }
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            value.vx = 30
        } else if (value.isHittingTile(CollisionDirection.Right)) {
            value.vx = -30
        }
    }
})
