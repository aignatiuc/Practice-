import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.use(Vuetify);

describe("DashboardHeader.vue", () => {
  it("render v-dropdown", () => {
    const wrapper = shallowMount(DashboardHeader, {
      mocks: {
        $t: () => {},
      },
    });
    const text = wrapper.find("v-dropdown");
    expect(text.exists()).toBe(false);
	});
});
