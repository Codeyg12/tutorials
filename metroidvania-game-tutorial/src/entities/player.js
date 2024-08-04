import { state } from "../state/globalStateManager.js";

export function makePlayer(k, initialPos) {
  return k.make([
    k.pos(initialPos),
    k.sprite("player"),
    k.area({
      shape: new k.Rect(k.vec2(0, 18), 12, 12),
    }),
    k.anchor("center"),
    k.body({ mass: 100, jumpForce: 320 }),
    k.doubleJump(state.current().isDoubleJumpUnlocked ? 2 : 1),
    k.opacity(),
    k.health(state.current().playerHp),
    "player",
    {
      speed: 150,
      isAttacking: false,
      setControls() {
        this.controlHandlers = [];

        this.controlHandlers.push(
          k.onKeyPress((key) => {
            if (key === "x") {
              if (this.curAnim() !== "jump") this.play("jump");
              this.doubleJump();
            }

            if (
              key === "z" &&
              this.curAnim() !== "attack" &&
              this.isGrounded()
            ) {
              this.isAttacking = true;
              this.add([k.pos(this.flipX ? -25 : 0, 10)]);
            }
          })
        );
      },
    },
  ]);
}
