import Vue from 'vue'
import Router from 'vue-router'

import routerLinkHome from '@/components/routerLinkHome.vue'
import routerLinkHome_firstLayer from '@/components/routerLinkHome/firstLayer.vue'
import slotHome from '@/components/slotHome.vue'
import livePeriodHome from '@/components/livePeriodHome.vue'
import livePeriodHome_livePeriodClick from '@/components/livePeriodHome/livePeriodClick.vue'
import axiosHome from '@/components/axiosHome.vue'
import axiosPage from '@/components/axiosHome/axiosPage.vue'

import elementUIHome from '@/components/elementUIHome.vue'
import elementUILayout from '@/components/elementUI/elementUILayout.vue'
import elementUI_columnSpacing from '@/components/elementUI/elementUILayout/columnSpacing.vue'
import elementUI_flexLayout from '@/components/elementUI/elementUILayout/flexLayout.vue'
import elementUI_gridLayout from '@/components/elementUI/elementUILayout/gridLayout.vue'
import elementUIContainer from '@/components/elementUI/elementUIContainer.vue'
import elementUIButton from '@/components/elementUI/elementUIButton.vue'
import elementUIButton_Place from '@/components/elementUI/elementUIButton/elementUIPlace.vue'
import elementUICheckbox from '@/components/elementUI/elementUICheckbox'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'routerLinkHome',
    },
    {
      path: '/routerLinkHome',
      // redirect:'/routerLinkHome/firstLayer',
      name: 'RouterLinkHome',
      component: routerLinkHome,
      children:[
        {
          path:'firstLayer',
          name:"FirstLayer",
          component:routerLinkHome_firstLayer,
        }
      ]
    },
    {
      path:"/slotHome",
      name:"SlotHome",
      component:slotHome,
    },
    {
      path:'/livePeriodHome',
      name:"LivePeriodHome",
      component:livePeriodHome,
      children:[
        {
          path:'livePeriodClick',
          name:'LivePeriodClick',
          component:livePeriodHome_livePeriodClick,
        }
      ]
    },
    {
      path:'/axiosHome',
      name:'AxiosHome',
      component:axiosHome,
    },
    {
      path:'/axiosHome/axiosPage',
      name:'AxiosPage',
      component:axiosPage,
    },
    {
      path:'/elementUIHome',
      name:'ElementUIHome',
      component:elementUIHome,
      children:[
        // 布局
        {
          path:'elementUILayout',
          name:"ElementUILayout",
          component:elementUILayout,
          children:[
            {
              path:'column_Spacing',
              name:'ColumnSpacing',
              component:elementUI_columnSpacing,
            },
            {
              path:'flex_layout',
              name:'FlexLayout',
              component:elementUI_flexLayout,
            },
            {
              path:'grid_layout',
              name:'GridLayout',
              component:elementUI_gridLayout,
            },
          ]
        },
        //容器 
        {
          path:"elementUIContainer",
          name:"ElementUIContainer",
          component:elementUIContainer,
        },
        // 按钮
        {
          path:'elementUIButton',
          name:"ElementUIButton",
          component:elementUIButton,
          children:[
            {
              path:'elementUIPlace',
              name:"ElementUIPlace",
              component:elementUIButton_Place,
            }
          ]
        },
        // 复选框
        {
          path:'elementUICheckbox',
          name:"ElementUICheckbox",
          component:elementUICheckbox,
        }
      ]
    }
      
    // }
  ],
  mode:'history'
})

