import React from 'react'
import { InitialTabBar, InitialHeader } from '@/Components'
import { Image, StatusBar } from 'react-native'
import {
    HomeContainer,
    UserFeedContainer,
    UserBagsContainer,
    ExplorerContainer,
    MyProfileContainer
} from '@/Containers'
import { Images } from '@/Theme'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTranslation } from 'react-i18next'

const Tab = createMaterialTopTabNavigator()

// @refresh reset
const HomeNavigator = () => {
    const { t } = useTranslation()

  return (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <InitialHeader />
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={props => <InitialTabBar {...props} />}
        >
            <Tab.Screen
                name="Home"
                component={HomeContainer}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                        <>
                            {focused ? (
                            <Image style={{ height: 25, width: 25 }} source={Images.homeActive}/>
                            ) : (
                            <Image style={{ height: 25, width: 25 }} source={Images.homeInactive}/>
                            )}
                        </>
                        )
                    },
                    title: t('tabLabels.homeTabLabel'),
                }}
            />
            <Tab.Screen
                name="UserFeed"
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                        <>
                            {focused ? (
                            <Image style={{ height: 25, width: 25 }} source={Images.gridActive}/>
                            ) : (
                            <Image style={{ height: 25, width: 25 }} source={Images.gridInactive}/>
                            )}
                        </>
                        )
                    },
                    title: t('tabLabels.feedTabLabel')
                }}
                component={UserFeedContainer} />
            <Tab.Screen
                name="UserBags"
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                        <>
                            {focused ? (
                            <Image style={{ height: 25, width: 25 }} source={Images.bagsActive}/>
                            ) : (
                            <Image style={{ height: 25, width: 25 }} source={Images.bagsInactive}/>
                            )}
                        </>
                        )
                    },
                    title: t('tabLabels.bagsTabLabel')
                }}
                component={UserBagsContainer} />
            <Tab.Screen
                name="Explorer"
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                        <>
                            {focused ? (
                            <Image style={{ height: 25, width: 25 }} source={Images.loupeActive}/>
                            ) : (
                            <Image style={{ height: 25, width: 25 }} source={Images.loupeInactive}/>
                            )}
                        </>
                        )
                    },
                    title: t('tabLabels.searchTabLabel')
                }}
                component={ExplorerContainer} />
            <Tab.Screen
                name="MyProfile"
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                        <>
                            {focused ? (
                            <Image style={{ height: 25, width: 25 }} source={Images.userActive}/>
                            ) : (
                            <Image style={{ height: 25, width: 25 }} source={Images.userInactive}/>
                            )}
                        </>
                        )
                    },
                    title: t('tabLabels.profileTabLabel')
                }}
                component={MyProfileContainer} />
        </Tab.Navigator>
    </>
  )
}

export default HomeNavigator
