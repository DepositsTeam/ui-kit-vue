<template>
  <d-modal
    :show="show"
    heading="Set up Google Authenticator"
    @closeModal="$emit('closed')"
    :greyContent="true"
    modalWidth="650px"
    alignment="center"
  >
    <d-box>
      <d-box
        display="flex"
        flex-direction="column"
        gap="1em"
        is="form"
        @submit.prevent="confirmAuthenticatorCode"
      >
        <d-text font-Family="circular-std" font-size="14px" color="#6D7786"
          >Follow the guide below to set up Google Authenticator for additional
          layer of security.
        </d-text>
        <d-box padding-top="1em" display="flex" flex-direction="row" gap="10px">
          <!-- QR CODE SECTION-->
          <d-box>
            <d-box class="qr__Border">
              <d-box is="img" :src="image" padding="10px" width="215px" />
            </d-box>
            <d-box class="qr__text">
              <d-text
                font-Family="circular std"
                font-weight="250"
                padding="5px"
                font-size="13px"
                >Use Google Authenticator app to scan this QR code, Download the
                app here if you don’t already have it.
              </d-text>
            </d-box>
          </d-box>
          <!-- GOOGLE AUTH SECTION -->
          <d-box>
            <d-box display="flex" flex-direction="column" gap="10px">
              <d-box>
                <d-text
                  font-Family="circular std"
                  font-size="14px"
                  font-weight="400"
                  >If you have any problem with scanning the QR code, enter this
                  code manually into the app.
                </d-text>
              </d-box>
              <d-box>
                <d-copy-input class="qr__code" :text="secret" />
              </d-box>
              <d-box padding-top="1em">
                <d-box>
                  <d-pin-input
                    noOfCharacters="6"
                    :password="true"
                    placeholder="-"
                    label="Enter security code from app:"
                    v-model="payload.code"
                  />
                </d-box>
              </d-box>
              <!-- Buttons -->
              <d-box padding-top="1em">
                <d-box>
                  <d-button
                    text="Enable Google Authenticator"
                    color-scheme="primary"
                    size="large"
                    responsive
                    :loading="isLoading"
                  />
                </d-box>
              </d-box>
            </d-box>
          </d-box>
        </d-box>
      </d-box>
    </d-box>
  </d-modal>
</template>

<script setup>
import {
  DBox,
  DButton,
  DText,
  DModal,
  DPinInput,
  useToast,
  DCopyInput,
} from "@/main";
import { reactive, ref } from "vue";
// import { useAxios } from "~/composables/useAxios";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    required: true,
  },
  secret: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
const payload = reactive({
  code: "",
});

// const { pushToast } = useToast();
// const emit = defineEmits(["verified", "closed"]);
const isLoading = ref(false);

// const confirmAuthenticatorCode = () => {
//   isLoading.value = true;
//
//   useAxios({
//     url: props.url,
//     payload: payload,
//     callback: (data) => {
//       if (data.status === "success") {
//         pushToast({
//           description: data.message,
//           colorScheme: "success",
//         });
//
//         emit("verified");
//       } else {
//         pushToast({
//           description: data.message,
//           colorScheme: "error",
//         });
//       }
//     },
//     final: () => {
//       isLoading.value = false;
//     },
//   });
// };
</script>

<style scoped>
.qr__border {
  border: 1px solid #ced6de;
  border-radius: 10px;
}

.qr__text {
  background: #ddefff;
}

.qr__code {
  border: 1px dashed #ced6de;
  border-radius: 0 5px 5px 0;
}
</style>
