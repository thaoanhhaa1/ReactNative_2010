import React from 'react';
import {
    FlatList,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import uuid from 'react-native-uuid';
import Header from '../../components/header/Header';
import formatCurrency from '../../utils/formatCurrency';
import styles from './styles';

const data = [
    {
        image: require('../../../assets/giacchuyen.png'),
        title: 'Dây USB Nối Dài 1.5m 3m 5m Đen - Dây Nối Dài Cổng Usb Chất Lượng',
        price: 69900,
        sale: 39,
        review: 15,
        rating: 1,
    },
    {
        image: require('../../../assets/daynguon.png'),
        title: 'CÁP USB NỐI DÀI 1.5M',
        price: 69900,
        sale: 39,
        review: 15,
        rating: 2,
    },
    {
        image: require('../../../assets/dauchuyendoipsps.png'),
        title: '[Mã ELFLASH3 hoàn 10K xu đơn 20K] CÁP USB LINK - Dây USB 2 đầu đực 2.0/ 3.0 (Màu xanh) - LOẠI TỐT',
        price: 69900,
        sale: 39,
        review: 15,
        rating: 3,
    },
    {
        image: require('../../../assets/dauchuyendoi.png'),
        title: 'Dây Cáp USB Micro, Mini, Type C, Truyền Dữ Liệu Cho Thiết Bị Arduno R3, Mega2560, Nano, Máy In, Sạc Điện Thoại',
        price: 69900,
        sale: 39,
        review: 15,
        rating: 4,
    },
    {
        image: require('../../../assets/carbusbtops.png'),
        title: 'Dây nối dài USB 2.0 UGREEN US103|Thiết kế gọn nhẹ|Tương thích hoàn toàn với các máy PC và Mac |Bảo Hành 18 Tháng 1 Đổi 1',
        price: 69900,
        sale: 39,
        review: 15,
        rating: 5,
    },
    {
        image: require('../../../assets/daucam.png'),
        title: 'Dây nối dài USB 3.0 UGREEN US129 | Dây dạng dẹt và tròn | Chiều dài 1-3m | Bảo Hành 18 Tháng 1 Đổi 1.',
        price: 69900,
        sale: 39,
        review: 15,
        rating: 0,
    },
    {
        image: require('../../../assets/dauchuyendoipsps.png'),
        title: '[Mã ELFLASH3 hoàn 10K xu đơn 20K] CÁP USB LINK - Dây USB 2 đầu đực 2.0/ 3.0 (Màu xanh) - LOẠI TỐT',
        price: 69900,
        sale: 39,
        review: 15,
        rating: 3,
    },
    {
        image: require('../../../assets/dauchuyendoi.png'),
        title: 'Dây Cáp USB Micro, Mini, Type C, Truyền Dữ Liệu Cho Thiết Bị Arduno R3, Mega2560, Nano, Máy In, Sạc Điện Thoại',
        price: 69900,
        sale: 39,
        review: 15,
        rating: 4,
    },
    {
        image: require('../../../assets/carbusbtops.png'),
        title: 'Dây nối dài USB 2.0 UGREEN US103|Thiết kế gọn nhẹ|Tương thích hoàn toàn với các máy PC và Mac |Bảo Hành 18 Tháng 1 Đổi 1',
        price: 69900,
        sale: 39,
        review: 15,
        rating: 5,
    },
    {
        image: require('../../../assets/daucam.png'),
        title: 'Dây nối dài USB 3.0 UGREEN US129 | Dây dạng dẹt và tròn | Chiều dài 1-3m | Bảo Hành 18 Tháng 1 Đổi 1.',
        price: 69900,
        sale: 39,
        review: 15,
        rating: 0,
    },
];

export default function Screen02() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                nestedScrollEnabled
                style={{ flex: 1 }}
                stickyHeaderIndices={[0]}
            >
                <Header moreActive cartActive>
                    <View style={styles.search}>
                        <Image
                            style={styles.searchIcon}
                            source={require('../../../assets/searchIcon.png')}
                        />
                        <TextInput
                            style={[
                                styles.input,
                                Platform.OS === 'web' && {
                                    outline: 'none',
                                },
                            ]}
                            value='Dây cáp usb'
                        />
                    </View>
                </Header>
                <FlatList
                    scrollEnabled={false}
                    columnWrapperStyle={{ gap: 30 }}
                    style={styles.list}
                    data={data}
                    numColumns={2}
                    keyExtractor={() => uuid.v4()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.info}>
                                <Text numberOfLines={2} style={styles.title}>
                                    {item.title}
                                </Text>
                                <View style={styles.review}>
                                    <View style={styles.rating}>
                                        {new Array(5)
                                            .fill(null)
                                            .map((_, index) => (
                                                <Image
                                                    key={uuid.v4()}
                                                    style={styles.start}
                                                    source={
                                                        index < item.rating
                                                            ? require('../../../assets/StartActive.png')
                                                            : require('../../../assets/StartInactive.png')
                                                    }
                                                />
                                            ))}
                                    </View>
                                    <Text>({item.review})</Text>
                                </View>
                                <View style={styles.priceGroup}>
                                    <Text style={styles.price}>
                                        {formatCurrency(item.price)} đ
                                    </Text>
                                    <Text style={styles.sale}>
                                        -{item.sale}%
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
