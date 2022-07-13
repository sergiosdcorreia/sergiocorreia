import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays website owner name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Sergio Correia");
  });
});
