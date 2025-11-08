import {createSlice} from '@reduxjs/toolkit'

let todoid=0;
const todoSlice=createSlice({
	name:'todoapp',
	initialState:{value:[]},
	reducers:{
		add:(state,action)=>{
			state.value.push({id:todoid++,text:action.payload})
		},
		remove:(state,action)=>{
			state.value=state.value.filter((e)=>e.id!==action.payload)
		},
		edit:(state,action)=>{
		const aa=state.value.find((e)=>e.id==action.payload.id)
		if(aa){aa.text=action.payload.text}
	}
}
})

export const {add,remove,edit} = todoSlice.actions
export default todoSlice.reducer