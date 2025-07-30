import React from 'react';
import { User, Settings, CreditCard, FileText, Phone, Mail, Bell, Download, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const PersonalCabinetPage = () => {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Дякуємо! Ваша заявка прийнята. Ми зв\'яжемося з вами найближчим часом.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const userInfo = {
    name: "Олександр Петренко",
    email: "oleksandr.petrenko@email.com",
    phone: "+38(067) 123 45 67",
    address: "м. Київ, вул. Хрещатик, 1"
  };

  const services = [
    {
      id: 1,
      name: "Відеоспостереження",
      status: "Активна",
      nextPayment: "15.02.2024",
      amount: "500 грн"
    },
    {
      id: 2,
      name: "Домофонна система",
      status: "Активна",
      nextPayment: "20.02.2024",
      amount: "300 грн"
    }
  ];

  const payments = [
    {
      id: 1,
      date: "15.01.2024",
      service: "Відеоспостереження",
      amount: "500 грн",
      status: "Оплачено"
    },
    {
      id: 2,
      date: "20.01.2024",
      service: "Домофонна система",
      amount: "300 грн",
      status: "Оплачено"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "payment",
      title: "Нагадування про оплату",
      message: "Наближається термін оплати за відеоспостереження",
      date: "2024-02-10",
      read: false
    },
    {
      id: 2,
      type: "maintenance",
      title: "Планове обслуговування",
      message: "Заплановано технічне обслуговування 15.02.2024",
      date: "2024-02-08",
      read: true
    }
  ];

  const documents = [
    { name: "Договір на відеоспостереження", date: "2024-01-15", type: "PDF" },
    { name: "Акт виконаних робіт", date: "2024-01-20", type: "PDF" },
    { name: "Інструкція користувача", date: "2024-01-10", type: "PDF" }
  ];

  const tabs = [
    { id: 'overview', name: 'Огляд', icon: <User className="w-4 h-4" /> },
    { id: 'services', name: 'Послуги', icon: <Settings className="w-4 h-4" /> },
    { id: 'payments', name: 'Платежі', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'notifications', name: 'Сповіщення', icon: <Bell className="w-4 h-4" /> },
    { id: 'documents', name: 'Документи', icon: <FileText className="w-4 h-4" /> },
    { id: 'support', name: 'Підтримка', icon: <Phone className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-800 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Особистий кабінет
          </h1>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {/* User Profile */}
            <div className="lg:col-span-1">
              <div className="bg-slate-700 rounded-lg p-6 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <User className="w-8 h-8 text-slate-800" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{userInfo.name}</h2>
                    <p className="text-gray-400">Клієнт</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>{userInfo.email}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>{userInfo.phone}</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-yellow-400 text-slate-800 px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center mb-6">
                  <Settings className="w-4 h-4 mr-2" />
                  Редагувати профіль
                </button>
                
                {/* Navigation Tabs */}
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 rounded text-sm font-medium transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-yellow-400 text-slate-800'
                          : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                      }`}
                    >
                      {tab.icon}
                      <span className="ml-2">{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-700 rounded-lg p-6 shadow-xl">
                      <h3 className="text-xl font-bold text-white mb-4">Швидка статистика</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Активних послуг:</span>
                          <span className="text-white font-semibold">2</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Останній платіж:</span>
                          <span className="text-white font-semibold">20.01.2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Статус:</span>
                          <span className="text-green-400 font-semibold">Активний</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-6 shadow-xl">
                      <h3 className="text-xl font-bold text-white mb-4">Найближчі події</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-yellow-400 mr-2" />
                          <span className="text-gray-300 text-sm">Оплата 15.02.2024</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-blue-400 mr-2" />
                          <span className="text-gray-300 text-sm">Обслуговування 20.02.2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Services Tab */}
              {activeTab === 'services' && (
                <div className="bg-slate-700 rounded-lg p-6 shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Активні послуги</h3>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <div key={service.id} className="bg-slate-600 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                          <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                            {service.status}
                          </span>
                        </div>
                        <div className="flex justify-between text-gray-300 text-sm">
                          <span>Наступна оплата: {service.nextPayment}</span>
                          <span className="font-semibold">{service.amount}</span>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <button className="bg-yellow-400 text-slate-800 px-3 py-1 rounded text-sm font-semibold hover:bg-yellow-300 transition-colors duration-200">
                            Налаштування
                          </button>
                          <button className="bg-transparent border border-gray-400 text-gray-300 px-3 py-1 rounded text-sm hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200">
                            Деталі
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Payments Tab */}
              {activeTab === 'payments' && (
                <div className="bg-slate-700 rounded-lg p-6 shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Історія платежів</h3>
                  <div className="space-y-4">
                    {payments.map((payment) => (
                      <div key={payment.id} className="bg-slate-600 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-white font-semibold">{payment.service}</h4>
                            <p className="text-gray-400 text-sm">{payment.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">{payment.amount}</p>
                            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                              {payment.status}
                            </span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <button className="bg-transparent border border-gray-400 text-gray-300 px-3 py-1 rounded text-sm hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200">
                            <Download className="w-3 h-3 mr-1 inline" />
                            Завантажити чек
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div className="bg-slate-700 rounded-lg p-6 shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Сповіщення</h3>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className={`bg-slate-600 rounded-lg p-4 border-l-4 ${
                        notification.type === 'payment' ? 'border-yellow-400' : 'border-blue-400'
                      } ${!notification.read ? 'bg-slate-600/80' : ''}`}>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start">
                            {notification.type === 'payment' ? (
                              <AlertCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                            ) : (
                              <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                            )}
                            <div>
                              <h4 className="text-white font-semibold">{notification.title}</h4>
                              <p className="text-gray-300 text-sm mt-1">{notification.message}</p>
                              <p className="text-gray-400 text-xs mt-2">{notification.date}</p>
                            </div>
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documents Tab */}
              {activeTab === 'documents' && (
                <div className="bg-slate-700 rounded-lg p-6 shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Документи</h3>
                  <div className="space-y-4">
                    {documents.map((doc, index) => (
                      <div key={index} className="bg-slate-600 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="w-5 h-5 text-yellow-400 mr-3" />
                          <div>
                            <h4 className="text-white font-semibold">{doc.name}</h4>
                            <p className="text-gray-400 text-sm">{doc.date} • {doc.type}</p>
                          </div>
                        </div>
                        <button className="bg-yellow-400 text-slate-800 px-3 py-1 rounded text-sm font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center">
                          <Download className="w-3 h-3 mr-1" />
                          Завантажити
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Support Tab */}
              {activeTab === 'support' && (
                <div className="space-y-8">
                  <div className="bg-slate-700 rounded-lg p-6 shadow-xl">
                    <h3 className="text-2xl font-bold text-white mb-6">Зв'язатися з підтримкою</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                          placeholder="Ваше ім'я *"
                        />
                        
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                          placeholder="Телефон *"
                        />
                      </div>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                        placeholder="Email"
                      />

                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                      >
                        <option value="">Оберіть тип звернення</option>
                        <option value="technical">Технічна підтримка</option>
                        <option value="billing">Питання по оплаті</option>
                        <option value="service">Обслуговування</option>
                        <option value="other">Інше</option>
                      </select>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none resize-none"
                        placeholder="Опишіть вашу проблему або питання..."
                      />

                      <button
                        type="submit"
                        className="w-full bg-yellow-400 text-slate-800 px-8 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200"
                      >
                        Відправити звернення
                      </button>
                    </form>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-6 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4">Контакти служби підтримки</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-5 h-5 mr-3 text-yellow-400" />
                        <span>+38(067) 164 06 33</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                        <span>spoberig@ukr.net</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-5 h-5 mr-3 text-yellow-400" />
                        <span>Пн-Пт: 9:00-18:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Active Services */}
              {activeTab === 'overview' && (
              <div className="bg-slate-700 rounded-lg p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Активні послуги</h3>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="bg-slate-600 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                          {service.status}
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-300 text-sm">
                        <span>Наступна оплата: {service.nextPayment}</span>
                        <span className="font-semibold">{service.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              )}
              
              {/* Payment History */}
              {activeTab === 'overview' && (
              <div className="bg-slate-700 rounded-lg p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Історія платежів</h3>
                <div className="space-y-4">
                  {payments.map((payment) => (
                    <div key={payment.id} className="bg-slate-600 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-white font-semibold">{payment.service}</h4>
                          <p className="text-gray-400 text-sm">{payment.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-semibold">{payment.amount}</p>
                          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                            {payment.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              )}
              
              {/* Quick Actions */}
              {activeTab === 'overview' && (
              <div className="bg-slate-700 rounded-lg p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Швидкі дії</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <button className="bg-yellow-400 text-slate-800 px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Оплатити послуги
                  </button>
                  <button className="bg-transparent border border-gray-400 text-gray-300 px-6 py-3 rounded hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200 flex items-center justify-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Подати заявку
                  </button>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalCabinetPage;