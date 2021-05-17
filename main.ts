namespace SpriteKind {
    export const Chests = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chests, function (sprite, otherSprite) {
    if (sprite.overlapsWith(otherSprite)) {
        info.changeLifeBy(1)
        tiles.placeOnRandomTile(heartGainer, sprites.dungeon.chestClosed)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (sprite.overlapsWith(otherSprite)) {
        info.changeScoreBy(1)
        tiles.placeOnRandomTile(LandEarth, sprites.castle.tileDarkGrass2)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    if (info.score() < 10) {
        game.over(false)
    } else {
        game.over(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    music.magicWand.playUntilDone()
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 13))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    if (sprite.bottom < otherSprite.y) {
        sprite.vy = -100
    } else {
        info.changeLifeBy(-1)
    }
})
let myEnemy: Sprite = null
let heartGainer: Sprite = null
let LandEarth: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
game.splash("Welcome To Alien Arena")
game.splash("Your Mission:")
game.splash("gain enough food points to supply 25 people, one point per person")
game.splash("You have 20 minutes")
game.splash("Get going!")
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
LandEarth = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
heartGainer = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.Chests)
tiles.placeOnRandomTile(LandEarth, sprites.castle.tileDarkGrass2)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(5)
mySprite.ay = 500
tiles.placeOnRandomTile(heartGainer, sprites.dungeon.chestClosed)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorLockedSouth)
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(sprites.dungeon.greenOuterSouth0)) {
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
    tiles.placeOnTile(myEnemy, value)
    myEnemy.follow(mySprite, 40)
}
info.startCountdown(120)
game.onUpdateInterval(500, function () {
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value2.isHittingTile(CollisionDirection.Bottom)) {
            if (value2.vx < 0 && value2.tileKindAt(TileDirection.Left, sprites.dungeon.collectibleBlueCrystal)) {
                value2.vy = -150
            } else if (value2.vx < 0 && value2.tileKindAt(TileDirection.Left, sprites.dungeon.collectibleBlueCrystal)) {
                value2.vy = -150
            }
        } else if (value2.isHittingTile(CollisionDirection.Left)) {
            value2.vx = 30
        } else if (value2.isHittingTile(CollisionDirection.Right)) {
            value2.vx = -30
        }
    }
})
