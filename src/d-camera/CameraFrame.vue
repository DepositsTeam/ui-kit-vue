<template>
  <d-box id="camera_frame_wrapper">
    <d-box id="camera_frame">
      <d-box id="left_top_camera_frame" />
      <d-box id="right_top_camera_frame" />
      <d-box id="left_bottom_camera_frame" />
      <d-box id="right_bottom_camera_frame" />
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
</script>

<style lang="scss" scoped>
#camera_frame_wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
#camera_frame {
  position: relative;
  height: 180px;
  width: 180px;
  & > * {
    border: 2px solid transparent;
    position: absolute;
    height: 24px;
    width: 24px;
  }
  #left_top_camera_frame {
    border-top-color: #bdbdbd;
    border-left-color: #bdbdbd;
    left: 0;
    top: 0;
  }
  #right_top_camera_frame {
    border-top-color: #bdbdbd;
    border-right-color: #bdbdbd;
    right: 0;
    top: 0;
  }
  #left_bottom_camera_frame {
    border-bottom-color: #bdbdbd;
    border-left-color: #bdbdbd;
    left: 0;
    bottom: 0;
  }
  #right_bottom_camera_frame {
    border-bottom-color: #bdbdbd;
    border-right-color: #bdbdbd;
    right: 0;
    bottom: 0;
  }
}
</style>
