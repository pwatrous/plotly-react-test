export const TOGGLE_GRAPH = "TOGGLE_GRAPH";

export function toggleGraph(selectedData) {
	return {
		type: TOGGLE_GRAPH,
		selectedData
	}
}