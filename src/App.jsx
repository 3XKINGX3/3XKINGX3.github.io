import React, { useState } from 'react';
import { Layout, Row, Col, Card, Table, Form, Input, Button, Radio, Select, DatePicker, Checkbox, Space, Image, Menu, Typography, Divider, message } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, CalendarOutlined } from '@ant-design/icons';
import './App.css';

const { Header, Footer, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const App = () => {
  const [form] = Form.useForm();
  const [mainImageError, setMainImageError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [mapImageError, setMapImageError] = useState(false);

  const tableData = [
    { key: '1', col1: 'Ячейка 1', col2: 'Ячейка 2', col3: 'Ячейка 3', col4: 'Ячейка 4' },
    { key: '2', col1: 'Ячейка 5', col2: 'Ячейка 6', col3: 'Ячейка 7', col4: 'Ячейка 8' },
    { key: '3', col1: 'Ячейка 9', col2: 'Ячейка 10', col3: 'Ячейка 11', col4: 'Ячейка 12' },
    { key: '4', col1: 'Объединенные ячейки', col2: '', col3: 'Ячейка 15', col4: 'Ячейка 16' },
    { key: '5', col1: 'Ячейка 17', col2: 'Ячейка 18', col3: 'Объединенные ячейки', col4: '' },
    { key: '6', col1: 'Ячейка 21', col2: 'Ячейка 22', col3: 'Ячейка 23', col4: 'Ячейка 24' },
  ];

  const tableColumns = [
    { 
      title: 'Колонка 1', 
      dataIndex: 'col1', 
      key: 'col1',
      onCell: (record, index) => {
        if (record.key === '4') {
          return { colSpan: 2 };
        }
        return {};
      }
    },
    { 
      title: 'Колонка 2', 
      dataIndex: 'col2', 
      key: 'col2',
      onCell: (record, index) => {
        if (record.key === '4') {
          return { colSpan: 0 };
        }
        return {};
      }
    },
    { 
      title: 'Колонка 3', 
      dataIndex: 'col3', 
      key: 'col3',
      onCell: (record, index) => {
        if (record.key === '5') {
          return { colSpan: 2 };
        }
        return {};
      }
    },
    { 
      title: 'Колонка 4', 
      dataIndex: 'col4', 
      key: 'col4',
      onCell: (record, index) => {
        if (record.key === '5') {
          return { colSpan: 0 };
        }
        return {};
      }
    },
  ];

  const onFinish = (values) => {
    console.log('Form values:', values);
    message.success('Форма успешно отправлена!');
  };

  const handleLinkClick = (url, event) => {
    event.preventDefault();
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      message.info(`Переход по ссылке: ${url}`);
    }
  };

  const SmartLink = ({ href, title, children, ...props }) => (
    <a 
      href={href} 
      onClick={(e) => handleLinkClick(href, e)}
      title={title}
      {...props}
    >
      {children}
    </a>
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { 
      key: '1', 
      label: 'Главная',
      onClick: () => scrollToSection('main-content')
    },
    { 
      key: '2', 
      label: 'Список гиперссылок',
      onClick: () => scrollToSection('links-section')
    },
    { 
      key: '3', 
      label: 'Нумерованный список',
      onClick: () => scrollToSection('numbered-list-section')
    },
    { 
      key: '4', 
      label: 'Таблица',
      onClick: () => scrollToSection('table-section')
    },
    { 
      key: '5', 
      label: 'Форма',
      onClick: () => scrollToSection('form-section')
    },
  ];

  const handleImageClick = () => {
    window.open('/image.png', '_blank');
  };

  const handleRectAreaClick = () => {
    window.open('https://tproger.ru/signed_image/BewTv_tt-Fc8-SwpVLcBJRr91mIYOtc6fcWGoPxIrlA/rs:fill:1272:0:true/cb:vimg_2/f:webp/aHR0cHM6Ly9tZWRpYS50cHJvZ2VyLnJ1L3VwbG9hZHMvMjAyNS8wNi9lZDM4ZmM3YS1iZWUzLTQwNmMtYTc5Yi1kZWFmODVjMmNhMTcuanBn', '_blank');
  };

  const handleCircleAreaClick = () => {
    window.open('https://kubsu.ru/lib/images/dataset-card.jpg', '_blank');
  };

  return (
    <Layout className="layout">
      <Header style={{ padding: '0 20px', background: '#f8f9fa' }}>
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col xs={24} sm={4}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                width={50}
                height={50}
                src="/image2.png"
                alt="Логотип"
                style={{ borderRadius: '5px', cursor: 'pointer' }}
                onError={() => setLogoError(true)}
                onClick={() => window.open('/image2.png', '_blank')}
              />
              {logoError && (
                <div 
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#1890ff',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                  onClick={() => message.info('Логотип не найден')}
                >
                  Лого
                </div>
              )}
            </div>
          </Col>
          <Col xs={24} sm={16}>
            <Title level={2} style={{ margin: 0, color: '#1890ff', textAlign: 'center' }}>
              Название сайта
            </Title>
          </Col>
          <Col xs={24} sm={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          </Col>
        </Row>
      </Header>

      <div style={{ background: '#001529' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems}
            style={{ lineHeight: '64px', border: 'none' }}
          />
        </div>
      </div>

      <Content style={{ padding: '20px', minHeight: 'calc(100vh - 128px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12} id="main-content">
              <Card title="Главная страница" style={{ height: '100%' }}>
                <Paragraph>
                  ❝ Никогда <SmartLink href="#">не отказывайся</SmartLink> от того, что заставляет тебя улыбаться. ❞
                </Paragraph>
                <div style={{ textAlign: 'center' }}>
                  {mainImageError ? (
                    <div 
                      style={{
                        width: '100%',
                        maxWidth: 500,
                        height: 300,
                        backgroundColor: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        borderRadius: '8px',
                        border: '1px solid #d9d9d9',
                        cursor: 'pointer'
                      }}
                      onClick={() => message.info('Изображение не найдено')}
                    >
                      <Text type="secondary">Изображение не найдено</Text>
                    </div>
                  ) : (
                    <img
                      src="/image.png"
                      alt="Изображение"
                      style={{ 
                        maxWidth: 500, 
                        width: '100%',
                        height: 'auto',
                        margin: '0 auto',
                        display: 'block',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}
                      onError={() => setMainImageError(true)}
                      onClick={handleImageClick}
                    />
                  )}
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={12} id="table-section">
              <Card title="Таблица">
                <Table
                  dataSource={tableData}
                  columns={tableColumns}
                  pagination={false}
                  size="middle"
                  scroll={{ x: true }}
                  bordered
                />
              </Card>
            </Col>

            <Col xs={24} id="links-section">
              <Card title="Список гиперссылок">
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={12}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <SmartLink href="http://kubsu.ru/">КубГУ</SmartLink>
                      <SmartLink href="https://www.kubsu.ru/" title="Официальный сайт Кубанского государственного университета">
                        КубГУ
                      </SmartLink>
                      <SmartLink href="https://www.kubsu.ru/">
                        Изображение
                      </SmartLink>
                      <SmartLink href="about/index.html">Внутренняя страница</SmartLink>
                      <SmartLink href="/">Главная страница</SmartLink>
                      <SmartLink href="#section1">Фрагмент страницы</SmartLink>
                      <SmartLink href="?parameter1=value1&amp;parameter2=value2&amp;parameter3=value3">Параметры</SmartLink>
                      <SmartLink href="?id=123">ID параметр</SmartLink>
                    </Space>
                  </Col>
                  <Col xs={24} md={12}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <SmartLink href="index.html">Перейти на страницу в текущем каталоге</SmartLink>
                      <SmartLink href="about/index.html">Перейти в раздел about</SmartLink>
                      <SmartLink href="../index.html">Перейти на страницу вверх на один уровень</SmartLink>
                      <SmartLink href="../../index.html">Перейти на страницу вверх на два уровня</SmartLink>
                      <SmartLink href="#">Контекст</SmartLink>
                      <SmartLink href="https://www.kubsu.ru/ru/studlife/placement#:~:text=Предлагаем%20стажировку%20и%20прохождение%20практики%20в%20компаниях">
                        Фрагмент страницы стороннего сайта
                      </SmartLink>
                      <SmartLink href="">Пустой href</SmartLink>
                      <a>Без href</a>
                      <SmartLink href="/index.html" rel="nofollow">
                        Ссылка, по которой запрещен переход поисковикам
                      </SmartLink>
                      <SmartLink href="/index.html" rel="noindex">
                        Ссылка, запрещенная для индексации поисковиками
                      </SmartLink>
                    </Space>
                  </Col>
                </Row>
                
                <Divider />
                
                <Text strong>Ссылки из прямоугольных и круглых областей картинки:</Text>
                <div style={{ textAlign: 'center', marginTop: 16 }}>
                  {mapImageError ? (
                    <div 
                      style={{
                        width: 320,
                        height: 160,
                        backgroundColor: '#e6f7ff',
                        border: '2px solid #1890ff',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        position: 'relative'
                      }}
                    >
                      <Text>Интерактивная карта изображения</Text>
                      <div 
                        style={{
                          position: 'absolute',
                          left: 30,
                          top: 30,
                          width: 120,
                          height: 60,
                          border: '2px dashed #ff4d4f',
                          cursor: 'pointer'
                        }}
                        onClick={handleRectAreaClick}
                      />
                      <div 
                        style={{
                          position: 'absolute',
                          left: 200,
                          top: 50,
                          width: 100,
                          height: 100,
                          border: '2px dashed #52c41a',
                          borderRadius: '50%',
                          cursor: 'pointer'
                        }}
                        onClick={handleCircleAreaClick}
                      />
                    </div>
                  ) : (
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <img
                        width={320}
                        height={160}
                        src="/image.svg"
                        alt="Изображение с областями ссылок"
                        style={{ border: '1px solid #d9d9d9', borderRadius: '8px' }}
                        onError={() => setMapImageError(true)}
                        useMap="#image-map"
                      />
                      <map name="image-map">
                        <area 
                          shape="rect" 
                          coords="30,30,150,90" 
                          href="https://tproger.ru/signed_image/BewTv_tt-Fc8-SwpVLcBJRr91mIYOtc6fcWGoPxIrlA/rs:fill:1272:0:true/cb:vimg_2/f:webp/aHR0cHM6Ly9tZWRpYS50cHJvZ2VyLnJ1L3VwbG9hZHMvMjAyNS8wNi9lZDM4ZmM3YS1iZWUzLTQwNmMtYTc5Yi1kZWFmODVjMmNhMTcuanBn" 
                          alt="Прямоугольная область"
                          onClick={(e) => {
                            e.preventDefault();
                            handleRectAreaClick();
                          }}
                        />
                        <area 
                          shape="circle" 
                          coords="250,100,50" 
                          href="https://kubsu.ru/lib/images/dataset-card.jpg" 
                          alt="Круглая область"
                          onClick={(e) => {
                            e.preventDefault();
                            handleCircleAreaClick();
                          }}
                        />
                      </map>
                    </div>
                  )}
                </div>
              </Card>
            </Col>

            <Col xs={24} md={12} id="numbered-list-section">
              <Card title="Нумерованный список" id="section1">
                <ol>
                  <li style={{ marginBottom: 8 }}>
                    <SmartLink href="index.html" title="Главная страница">Главная страница</SmartLink>
                  </li>
                  <li>
                    <SmartLink href="forma.html" title="Форма с авторизацией">Форма с авторизацией</SmartLink>
                  </li>
                </ol>
              </Card>
            </Col>

            <Col xs={24} md={12} id="form-section">
              <Card title="Форма с авторизацией">
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    label="ФИО"
                    name="name"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваше ФИО' }]}
                  >
                    <Input 
                      prefix={<UserOutlined />} 
                      placeholder="Введите ваше ФИО" 
                    />
                  </Form.Item>

                  <Form.Item
                    label="Телефон"
                    name="telephone"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваш телефон' }]}
                  >
                    <Input 
                      prefix={<PhoneOutlined />} 
                      placeholder="Введите ваш телефон" 
                    />
                  </Form.Item>

                  <Form.Item
                    label="Почта"
                    name="email"
                    rules={[
                      { required: true, message: 'Пожалуйста, введите ваш email' },
                      { type: 'email', message: 'Введите корректный email' }
                    ]}
                  >
                    <Input 
                      prefix={<MailOutlined />} 
                      placeholder="Введите ваш email" 
                    />
                  </Form.Item>

                  <Form.Item
                    label="Дата рождения"
                    name="date"
                    rules={[{ required: true, message: 'Пожалуйста, выберите дату рождения' }]}
                  >
                    <DatePicker 
                      style={{ width: '100%' }}
                      placeholder="Выберите дату"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Пол"
                    name="gender"
                    rules={[{ required: true, message: 'Пожалуйста, выберите пол' }]}
                  >
                    <Radio.Group>
                      <Radio value="male">Мужской</Radio>
                      <Radio value="female">Женский</Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item
                    label="Любимый язык программирования"
                    name="languages"
                    rules={[{ required: true, message: 'Пожалуйста, выберите язык программирования' }]}
                  >
                    <Select
                      mode="multiple"
                      placeholder="Выберите языки программирования"
                      style={{ width: '100%' }}
                    >
                      <Option value="pascal">Pascal</Option>
                      <Option value="c">C</Option>
                      <Option value="cpp">C++</Option>
                      <Option value="javascript">JavaScript</Option>
                      <Option value="php">PHP</Option>
                      <Option value="python">Python</Option>
                      <Option value="java">Java</Option>
                      <Option value="haskell">Haskell</Option>
                      <Option value="clojure">Clojure</Option>
                      <Option value="prolog">Prolog</Option>
                      <Option value="scala">Scala</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Биография"
                    name="biography"
                    rules={[{ required: true, message: 'Пожалуйста, расскажите о себе' }]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Расскажите о себе..."
                      maxLength={2000}
                    />
                  </Form.Item>

                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[{ required: true, message: 'Необходимо согласие с контрактом' }]}
                  >
                    <Checkbox>
                      Я с контрактом ознакомлен(а)
                    </Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      Сохранить
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer style={{ textAlign: 'center', background: '#001529', color: 'white' }}>
        <Text style={{ color: 'white' }}>
          &copy; Полей Дэниел Владимирович 2025
        </Text>
      </Footer>
    </Layout>
  );
};

export default App;