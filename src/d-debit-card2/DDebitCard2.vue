<template>
  <d-box class="ui-d-debit-card__wrapper">
    <d-box
      class="ui-d-debit-card"
      :class="{
        rotate,
        hoverFlip,
        faceFront: faceFront && hoverFlip,
        faceBack: !faceFront && hoverFlip,
      }"
      :style="{ '--debit-card-width': cardWidth }"
      @mouseleave="flipOver"
      ref="cardElem"
    >
      <d-box
        class="ui-d-debit-card__front"
        :class="{ [`theme__${theme}`]: theme }"
      >
        <d-box class="ui-d-debit-card__brand">
          <d-box is="img" :src="cardBrand" :alt="brand" />
        </d-box>
        <d-box class="ui-d-debit-card__logo">
          <d-box is="img" :src="cardLogo" />
        </d-box>
        <d-box class="ui-d-debit-card__debit">
          <d-text>{{ bottomLeftText }}</d-text>
        </d-box>
      </d-box>
      <d-box
        class="ui-d-debit-card__back"
        :class="{ [`theme__${theme}`]: theme }"
      >
        <d-box class="ui-d-debit-card__bar"></d-box>
        <d-box class="ui-d-debit-card__column">
          <d-text class="ui-d-debit-card__disclaimer"
            >This card is issued by Metropolitan Commercial Bank (Member FDIC)
            pursuant to a licence from Mastercard International.
          </d-text>
          <d-box>
            <d-box class="ui-d-debit-card__full-name">
              <d-text> {{ firstName }} {{ lastName }}</d-text>
            </d-box>
            <d-box class="ui-d-debit-card__bank-no-wrapper">
              <d-box class="ui-d-debit-card__bank-no top">
                <d-text margin-y="0">
                  <span>
                    {{ cardNo.substring(0, 4) }}
                  </span>
                  <span>
                    {{ cardNo.substring(4, 8) }}
                  </span>
                </d-text>
              </d-box>
              <d-box class="ui-d-debit-card__bank-no bottom">
                <d-text margin-y="0">
                  <span>
                    {{ cardNo.substring(8, 12) }}
                  </span>
                  <span>
                    {{ cardNo.substring(12, 16) }}
                  </span>
                </d-text>
              </d-box>
            </d-box>
            <d-box class="ui-d-debit-card__exp_security">
              <d-box class="ui-d-debit-card__exp">
                <d-text margin-y="0" class="ui-d-debit-card__exp__heading">
                  EXP <br />
                  DATE
                </d-text>
                <d-text margin-y="0" class="ui-d-debit-card__exp__value">
                  {{ expDate }}
                </d-text>
              </d-box>
              <d-box class="ui-d-debit-card__security">
                <d-text margin-y="0" class="ui-d-debit-card__security__heading">
                  SECURITY <br />
                  CODE
                </d-text>
                <d-text margin-y="0" class="ui-d-debit-card__security__value">
                  {{ cvv }}
                </d-text>
              </d-box>
            </d-box>
          </d-box>
          <d-box class="ui-d-debit-card__support">
            <d-text>
              <span v-html="footnote" />
            </d-text>
          </d-box>
        </d-box>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../main";
import { computed, ref } from "vue";

const faceFront = ref(true);
const cardElem = ref(null);

const props = defineProps({
  brand: {
    type: String,
    default: "mastercard",
    validator: (value) => ["mastercard", "visa", "amex"].includes(value),
  },
  theme: {
    type: String,
    default: "light",
    validator: (value) => ["light", "dark", "grey"].includes(value),
  },
  cardWidth: {
    type: String,
    default: "300px",
  },
  firstName: {
    type: String,
    default: "FIRSTNAME",
  },
  lastName: {
    type: String,
    default: "LASTNAME",
  },
  cardNo: {
    type: String,
    default: "5534631253547890",
  },
  rotate: {
    type: Boolean,
  },
  hoverFlip: {
    type: Boolean,
    default: true,
  },
  defaultFace: {
    type: String,
    validator: (value) => ["front", "back"].includes(value),
  },
  bottomLeftText: {
    type: String,
    default: "debit",
  },
  expDate: {
    type: String,
    default: "12/23",
  },
  cvv: {
    type: String,
    default: "123",
  },
  footnote: {
    type: String,
    default: `For Support Visit: <br />
              ondeposits.com/cards/help <br />
              +1 (885-786-2114)`,
  },
});

const cardBrand = computed(() => {
  return `https://assets.ondeposits.com/img/debit-card-brands/svg/${
    props.brand
  }_${
    props.theme === "light" || props.theme === "grey" ? "dark" : "light"
  }.svg`;
});

const cardLogo = computed(() => {
  if (props.theme === "dark") {
    return `https://assets.ondeposits.com/img/logo/deposits/svg/logo_all_white.svg`;
  }
  if (props.theme === "grey") {
    return `https://assets.ondeposits.com/img/logo/deposits/svg/logo_all_dark.svg`;
  }
  return `https://assets.ondeposits.com/img/logo/deposits/svg/logo_main.svg`;
});

const flipOver = () => {
  if (props.hoverFlip) {
    faceFront.value = !faceFront.value;
  }
};

const calcAngle = (e) => {
  let dropShadowColor = `rgba(0, 0, 0, 0.3)`;
  // if (parent.getAttribute("data-filter-color") !== null) {
  //   dropShadowColor = parent.getAttribute("data-filter-color");
  // }

  // parent.classList.add("animated");
  // Get the x position of the users mouse, relative to the button itself
  let x = Math.abs(cardElem.value.$el.getBoundingClientRect().x - e.clientX);
  // Get the y position relative to the button
  let y = Math.abs(cardElem.value.$el.getBoundingClientRect().y - e.clientY);

  // Calculate half the width and height
  let halfWidth = cardElem.value.$el.getBoundingClientRect().width / 2;
  let halfHeight = cardElem.value.$el.getBoundingClientRect().height / 2;

  // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
  // Changing these numbers will change the depth of the effect.
  let calcAngleX = (x - halfWidth) / 6;
  let calcAngleY = (y - halfHeight) / 14;

  let gX = (1 - x / (halfWidth * 2)) * 100;
  let gY = (1 - y / (halfHeight * 2)) * 100;

  // Add the glare at the reflection of where the user's mouse is hovering
  cardElem.value.$el.style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`;
  // And set its container's perspective.
  // parent.style.perspective = `${halfWidth * 6}px`;
  cardElem.value.$el.style.perspective = `${halfWidth * 6}px`;

  // Set the cardElem.value.$els transform CSS property
  cardElem.value.$el.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`;
  // parent.querySelector(
  //   ".inner-card-backface"
  // ).style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04) translateZ(-4px)`;

  // if (parent.getAttribute("data-custom-perspective") !== null) {
  //   parent.style.perspective = `${parent.getAttribute(
  //     "data-custom-perspective"
  //   )}`;
  // }

  // Reapply this to the shadow, with different dividers
  let calcShadowX = (x - halfWidth) / 3;
  let calcShadowY = (y - halfHeight) / 6;

  // Add a filter shadow - this is more performant to animate than a regular box shadow.
  cardElem.value.$el.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadowColor})`;
};
</script>

<style scoped lang="scss">
@keyframes rot {
  50% {
    transform: rotateY(0.5turn);
  }
  100% {
    transform: rotateY(1turn);
  }
}

.ui-d-debit-card__wrapper {
  perspective: 200em;
}

.ui-d-debit-card {
  display: flex;
  transform-style: preserve-3d;
  width: var(--debit-card-width);
  max-width: 600px;
  aspect-ratio: 16/25;

  &.rotate {
    animation: rot 4s ease-in-out infinite;
  }

  &.hoverFlip {
    transition: transform 1s ease-in-out;
    transform: rotateY(0turn);

    &.faceFront {
      transform: rotateY(0turn);
    }

    &.faceBack {
      transform: rotateY(0.5turn);
    }
  }

  backface-visibility: hidden;

  .ui-d-debit-card__front,
  .ui-d-debit-card__back {
    backface-visibility: hidden;
    position: absolute;
    border-radius: 15px;
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);

    &.theme__dark {
      background: linear-gradient(
        180deg,
        rgba(33, 41, 52, 0.85) 0%,
        #1b232d 100%
      );

      &.dark_mode {
        border: 0.39px inset rgba(#cbd5e1, 0.15);
      }

      .ui-d-debit-card__debit {
        .ui-text {
          color: #ffffff;
        }
      }

      .ui-d-debit-card__support {
        .ui-text {
          color: #ffffff;
        }
      }

      .ui-d-debit-card__full-name {
        .ui-text {
          color: #ffffff;
        }
      }

      .ui-d-debit-card__bar {
        background: #f5f8fa;

        &.dark_mode {
          background: var(--dark-background-color);
        }
      }

      .ui-d-debit-card__disclaimer {
        color: #ffffff;
      }

      .ui-d-debit-card__exp {
        .ui-d-debit-card__exp__heading {
          color: #ffffff;
        }

        .ui-d-debit-card__exp__value {
          color: #ffffff;
        }
      }

      .ui-d-debit-card__security {
        .ui-d-debit-card__security__heading {
          color: #ffffff;
        }

        .ui-d-debit-card__security__value {
          color: #ffffff;
        }
      }

      .ui-d-debit-card__bank-no-wrapper {
        .ui-d-debit-card__bank-no {
          &.top {
            border-right: 2px solid #ffffff;

            &::after {
              background: #ffffff;
            }
          }

          &.bottom {
            border-left: 2px solid #ffffff;
          }

          .ui-text {
            color: #ffffff;
          }
        }
      }
    }

    &.theme__grey {
      background: linear-gradient(
        180deg,
        rgba(228, 233, 239, 0.65) 0%,
        #e1e7ec 100%
      );
    }

    .ui-d-debit-card__brand {
      display: flex;
      justify-content: flex-end;
      padding: 5%;

      img {
        width: 33%;
        transform-style: preserve-3d;
        height: auto;
      }
    }

    .ui-d-debit-card__logo {
      display: flex;
      justify-content: center;

      img {
        width: 65%;
        transform-style: preserve-3d;
        height: auto;
      }
    }

    .ui-d-debit-card__debit {
      padding: 5%;

      .ui-text {
        color: #525964;
        font-weight: 600;
      }
    }
  }

  .ui-d-debit-card__back {
    display: flex;
    flex-direction: row;
    transform: rotateY(180deg);

    .ui-d-debit-card__support {
      color: #525964;
      font-size: 10px;
      font-weight: 300;
      text-align: center;
      margin-bottom: 15%;
    }

    .ui-d-debit-card__exp_security {
      width: 60%;
      margin-left: 35%;
    }

    .ui-d-debit-card__exp {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10%;
      margin-top: 10%;

      .ui-d-debit-card__exp__heading {
        color: #525964;
        font-size: 10px;
      }

      .ui-d-debit-card__exp__value {
        color: #525964;
        font-size: 14px;
      }
    }

    .ui-d-debit-card__security {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .ui-d-debit-card__security__heading {
        color: #525964;
        font-size: 10px;
      }

      .ui-d-debit-card__security__value {
        color: #525964;
        font-size: 14px;
      }
    }

    .ui-d-debit-card__bar {
      margin-left: 8%;
      height: 100%;
      background: #525964;
      width: 15%;
      flex: 0 0 15%;

      &.dark_mode {
        background: var(--dark-background-color);
      }
    }

    .ui-d-debit-card__disclaimer {
      font-size: 9px;
      padding: 5% 5% 10%;
      color: #525964;
      font-weight: 300;
      letter-spacing: 0.5px;
    }

    .ui-d-debit-card__column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .ui-d-debit-card__full-name {
      display: flex;
      justify-content: flex-end;
      font-weight: 600;
      font-size: 13px;
      padding-right: 5%;
      color: #525964;
    }

    .ui-d-debit-card__bank-no-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .ui-d-debit-card__bank-no {
        display: inline-flex;
        justify-content: flex-end;
        margin-right: 5%;
        margin-bottom: 16px;
        padding: 0 2%;
        flex: 0 0 0;

        &.top {
          border-right: 2px solid #525964;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            height: 2px;
            width: 106%;
            top: 125%;
            right: -2%;
            transform: rotate(-8deg);
            background: #525964;
          }
        }

        &.bottom {
          border-left: 2px solid #525964;
        }

        .ui-text {
          color: #525964;
          font-size: 19px;
          font-weight: 300;
          letter-spacing: 1.5px;
        }

        span:first-child {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
