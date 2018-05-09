import * as rootypes from '../mutations_type.js'

const types = {
	OPEN_1999: 'open/OPEN_1999',
	OPENDATA_SAERCH_REGION: 'open/OPENDATA_SAERCH_REGION',
	OPENDATA_SEARCH_KEYWORD: 'open/OPENDATA_SEARCH_KEYWORD',
}

const state = {
	opendata: [],
  	RegionOption: ["三民區", "仁武區", "內門區", "六龜區", "前金區", "前鎮區", "大寮區", "大樹區", "大社區", "小港區", "岡山區", "左營區", "彌陀區", "新興區", "旗山區", "旗津區", "杉林區", "林園區", "桃源區", "梓官區", "楠梓區", "橋頭區", "永安區", "湖內區", "燕巢區", "田寮區", "甲仙區", "美濃區", "苓雅區", "茂林區", "茄萣區", "路竹區", "那瑪夏區", "阿蓮區", "鳥松區", "鳳山區", "鹽埕區", "鼓山區"],
  	search: {
    	region: 'all',
    	keyword: ''
  	}
}

const getters = {
	getLoading: state => state.loading,
	getRegionOption: state => state.RegionOption,
	// getOpen1999: state => state.opendata,
	getOpen1999: state => {
		let _opendata = state.opendata;
		if(state.search.region !== 'all') {
			_opendata = _opendata.filter(item => (item.ZipName_ === state.search.region));
		}
		if(state.search.keyword !== '') {
			_opendata = _opendata.filter(item => (JSON.stringify(item).indexOf(state.search.keyword) != -1));
		}
		return _opendata;
	}
}

const actions = {
	open1999 ({commit}) {
		commit(rootypes.LOADING, true);

		fetch('http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery')
			.then(function (response) {
				if (response.ok) {
					return response.json();
				} else {
					console.error(response);
					commit(rootypes.LOADING, false);
				}
			})
			.then(function (data) {
				commit(types.OPEN_1999, data);
				commit(rootypes.LOADING, false);
			})
			.catch(function (error) {
				console.error(error);
				commit(rootypes.LOADING, false);
			})
	},
	opendataSearchRegion ({ commit }, region) {
		console.log('opendataSearchRegion', region);
		commit(types.OPENDATA_SAERCH_REGION, region);
	},
	opendataSearchKeyword ({ commit }, keyword) {
		commit(types.OPENDATA_SEARCH_KEYWORD, keyword);
	},
}

const mutations = {
	[types.OPEN_1999] (state, data) {
		state.opendata = data;
	},
	[types.OPENDATA_SAERCH_REGION] (state, region) {
		state.search.region = region;
	},
	[types.OPENDATA_SEARCH_KEYWORD] (state, keyword) {
		state.search.keyword = keyword;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
