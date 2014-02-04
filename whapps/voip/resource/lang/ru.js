window.translate['resource'] = {
	global_carrier: "Системный провайдер",
	global_carrier_tip: "Маршрутизировать вызовы в телефонную сеть через системного оператора",
	account_carrier: "Собственный провайдер",
	account_carrier_tip: "Маршрутизировать вызовы в телефонную сеть через собственного SIP-оператора или через местную линию (шлюз)",
	use_carriers_from_specific_account: "Использовать провайдеров из учётной записи",
	account_id: "ID учётной записи",
	account_carrier_title: "Провайдер учётной записи",
	add_carrier: "Добавить провайдера",
	edit: "Редактировать",
	carrier: "Провайдер",
	basic: "Базовые",
	advanced: "Расширенные",
	options: "Настройки",
	gateway_codecs: "Кодеки шлюза",
	caller_id_options: "Параметры Caller-ID",
	carrier_type: "Тип провайдера:",
	carrier_type_data_content: "Системные провайдеры предоставляют линии всей системе.",
	local: "Свой",
	global: "Системный",
	name: "Имя",
	name_data_content: "Удобочитаемое имя провайдера",
	server: "Сервер:",
	server_placeholder: "Доменное имя или IP-адрес",
	server_data_content: "Доменное имя или IP-адрес сервера назначения",
	username: "Имя пользователя:",
	username_placeholder: "Имя пользователя",
	username_data_content: "Имя пользователя для аутентификации на сервере",
	password: "Пароль:",
	password_placeholder: "Пароль",
	password_data_content: "Пароль для аутентификации на сервере",
	priority: "Приоритет:",
	priority_data_content: "Приоритет, который определяет порядок использования нескольких провайдеров с одинаковыми правилами анализа номеров. Например, несколько местных провайдеров",
	enabled: "Включено",
	enabled_data_content: "Если выключить, провайдер не будет использоваться для звонков",
	realm: "SIP-домен (Realm):",
	realm_placeholder: "SIP-домен (Realm)",
	realm_data_content: "SIP-домен (Realm) для аутентификации на сервере",
	pass_realm_in_invite: "Передавать SIP-домен (Realm) в заголовке INVITE",
	pass_realm_in_invite_data_content: "Некоторые вышестоящие операторы телефонии хотят точно знать от какой учётной записи происходит вызов. Выбор этой опции заставляет систему передавать SIP-домен (Realm) в поле From: заголовка пакета INVITEs, чтобы вышестоящий  оператор мог определить звонящего клиента. Это может быть полезно для тарификации или выбора исходящего направления. ВНИМАНИЕ: Эти данные также используются для аутентификации. Если вы аутентифицируете звонки, это изменит SIP-домен аутентификации.",
	rules: "Правила:",
	rules_data_content: "Регулярное выражение, использующееся для анализа номера и выбора провайдера.",
	prefix: "Префикс",
	prefix_data_content: "Дополнительные символы, добавляемые перед набираемым номером",
	suffix: "Суффикс",
	suffix_data_content: "Дополнительные символы, добавляемые после набранного номера",
	progress_timeout: "Таймаут вызова (с)",
	progress_timeout_data_content: "Максимальное время ожидания соединения с шлюзом провайдера (секунды)",
	peer: "Другая сторона",
	audio_codecs: "Кодеки звук",
	type: "Тип",
	type_data_content: "Конкретный тип caller-id для поиска при использовании этого маршрута",
	delete: "Удалить",
	save: "Сохранить",
	congratulations_youre_now_using: "Поздравляем! Вы используете",
	as_your_global_carrier: "как системного оператора!",
	your_provider: "ваш провайдер",
	if_you_want_to_manage: 'Если вы хотите использовать собственных провайдеров, выберите кнопку Использовать своих провайдеров',
	use: "Использовать",
	as_my_phone_company: "как моего телефонного провайдера",
	use_my_provider: "Использовать моего провайдера",
	use_a_different_carrier: "Использовать своих провайдеров",
	your_account_is_currently: "Ваша учётная запись сейчас использует внешних провайдеров",
	you_can_manage_your_own_carriers: "Вым можете управлять собственными провайдерами добавляя, редактируя и удаляя их в списке с левой стороны.",
	select_the_type: "Выберите тип провайдера, который вы хотите использовать",
	this_module_is_meant: "Этот модуот помогает пользователям создавать собственное правило маршрутизации по умолчанию (no_match).",
	as_youre_already_using: "Вы уже используете собственный, этот модуль выключен!",
	in_order_to_re_enable_this_module: "Чтобы снова включить этот модуль, вы должны удалить сценарий обработки с номером no_match.",
	carriers_label: "Провайдеры",
	no_match: "Правило no_match",
	custom: "Собственный",
	there_were_errors_on_the_form: "При заполнении формы были допущены ошибки. Пожалуйста, исправьте!",
	are_you_sure_you_want_to_delete: "Вы уверены что хотите удалить этого провайдера?",
	highest: "Наивысший",
	high: "Высокий",
	normal: "Средний",
	low: "Низкий",
	lowest: "Самый низкий",
	carriers_module_label: "Модуль подключения провайдеров",
	add_carrier_label: "Добавить провайдера",
	error: "Ошибка: ",
	are_you_sure_you_want_to_use: "Вы уверены что хотите использовать другого провайдера?"
};