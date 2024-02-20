import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import { onMounted, onUnmounted, ref } from "vue";
export const useFloatDropdown = ({
  trigger = "click",
  alignRight = false,
  timeout = 0,
} = {}) => {
  const targetRef = ref(null);
  const dropdownRef = ref(null);
  const hidden = ref(true);
  const dropdownWrapperRef = ref(null);

  const updateDropdown = () => {
    dropdownRef.value.$el.style.width = targetRef.value.$el.clientWidth + "px";

    computePosition(targetRef.value.$el, dropdownRef.value.$el, {
      placement: alignRight ? "bottom-end" : "bottom-start",
      middleware: [offset(0), flip(), shift({ padding: 5 })],
    }).then(({ x, y }) => {
      Object.assign(dropdownRef.value.$el.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  };

  const updateScroll = () => {
    updateDropdown();
  };

  const removeOnClickOutside = (e) => {
    if (
      !e.target.closest(`#${dropdownWrapperRef.value.$el.id}`) &&
      !e.target.closest(dropdownRef.value.$el.id) &&
      trigger === "click"
    ) {
      hidden.value = true;
    }
  };

  const handleTargetClick = () => {
    if (trigger === "click") {
      if (hidden.value) {
        hidden.value = false;
        updateDropdown();
        if (timeout && timeout > 0) {
          setTimeout(() => {
            hidden.value = true;
          }, timeout * 1000);
        }
      } else {
        hidden.value = true;
      }
    }
  };

  const handleMouseEnter = () => {
    if (hidden.value && trigger === "hover") {
      hidden.value = false;
      updateDropdown();
    }
  };

  const handleMouseLeave = () => {
    if (!hidden.value && trigger === "hover") {
      hidden.value = true;
    }
  };

  onMounted(() => {
    updateDropdown();
    window.addEventListener("click", removeOnClickOutside);
    window.addEventListener("scroll", updateScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("click", removeOnClickOutside);
    window.removeEventListener("scroll", updateScroll);
  });

  return {
    targetRef,
    dropdownRef,
    hidden,
    dropdownWrapperRef,
    handleTargetClick,
    handleMouseEnter,
    handleMouseLeave,
  };
};
