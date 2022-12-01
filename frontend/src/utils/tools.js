import axios from "axios";
import store from "@/global/store";

export function generateVoucherCode () {
	return axios.get(store.getters.getURL + '/vouchers/generate-code')
}
