<template>
  <d-box>
    <d-box v-if="currentSnapshot">
      <d-box
        is="img"
        width="100%"
        height="auto"
        :src="currentSnapshot"
        alt="Current Snapshot"
      />
      <slot name="preview"></slot>
    </d-box>
    <d-box v-else>
      <v-camera
        class="camera-view"
        ref="camera"
        autoplay
        @started="startCameraFeed"
        @stopped="stopCameraFeed"
        :resolution="{ height: 1920, width: 1080 }"
      >
        <camera-frame v-if="showFocusFrame && cameraFeedShowing" />
        <slot name="in-camera"></slot>
      </v-camera>
      <d-text margin-y="1rem" center font-face="circularSTD" scale="subhead">{{
        caption
      }}</d-text>
      <d-auto-layout class="responsive-auto-layout" alignment="center">
        <d-button @click="switchCamera" min-width="192px" responsive size="huge"
          >Switch camera</d-button
        >
        <d-button
          @click="snapshot"
          color-scheme="primary"
          min-width="192px"
          size="huge"
          responsive
        >
          Capture
        </d-button>
      </d-auto-layout>
      <slot name="camera-actions"></slot>
    </d-box>
  </d-box>
</template>

<script>
import { DBox, DButton, DAutoLayout, DText } from "../main";
import CameraFrame from "./CameraFrame.vue";
import VCamera from "simple-vue-camera";
import { ref, nextTick } from "vue";

export default {
  name: "CameraWrapper",
  emits: ["snapped"],
  components: {
    DBox,
    DButton,
    DAutoLayout,
    DText,
    CameraFrame,
    VCamera,
  },
  props: {
    caption: {
      type: String,
    },
    showFocusFrame: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const camera = ref(null);
    const currentCamera = ref(0);
    const currentSnapshot = ref(null);
    const devices = ref(null);
    const mounted = ref(false);
    const cameraFeedShowing = ref(false);

    const startCameraFeed = () => (cameraFeedShowing.value = true);
    const stopCameraFeed = () => (cameraFeedShowing.value = false);

    const switchCamera = async () => {
      devices.value = await camera.value?.devices(["videoinput"]);
      const currentDeviceID = await camera.value.currentDeviceID();
      if (!mounted.value && currentDeviceID !== devices.value[0].deviceId) {
        await camera.value.changeCamera(devices.value[0].deviceId);
        mounted.value = true;
        return;
      }
      await nextTick();
      if (devices.value) {
        if (devices.value.length >= 2) {
          let newValue = currentCamera.value + 1;
          if (newValue > devices.value.length - 1) {
            newValue = 0;
          }
          currentCamera.value = newValue;
          await nextTick();
          const device = devices.value[currentCamera.value];
          camera.value?.changeCamera(device.deviceId);
        }
      }
      mounted.value = true;
    };

    const snapshot = async () => {
      const blob = await camera.value.snapshot({ width: 1920, height: 1080 });

      currentSnapshot.value = URL.createObjectURL(blob);
      emit("snapped", {
        image: currentSnapshot.value,
        blob,
        file: new File([blob], "name"),
      });
    };

    const retakePicture = async () => {
      currentSnapshot.value = null;
    };

    return {
      currentSnapshot,
      retakePicture,
      snapshot,
      startCameraFeed,
      stopCameraFeed,
      switchCamera,
      camera,
      currentCamera,
      devices,
      mounted,
      cameraFeedShowing,
    };
  },
};
</script>

<style lang="scss" scoped>
.camera-view {
  width: 100%;
}
</style>

<style lang="scss">
#camera-container {
  video {
    //aspect-ratio: 16 / 9;
  }
}
</style>
