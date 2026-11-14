/* @ds-bundle: {"format":3,"namespace":"SystemsMXDesignSystem_019dda","components":[],"sourceHashes":{"ui_kits/analyze/CFDITable.jsx":"c4255501fd46","ui_kits/analyze/Dashboard.jsx":"c35ff46b7b92","ui_kits/analyze/Sidebar.jsx":"198b9931711a","ui_kits/analyze/TopBar.jsx":"3c23b404c37f","ui_kits/pos/AdminPanel.jsx":"d3c2ff8ffa4b","ui_kits/pos/Cart.jsx":"2eaa956a0a1a","ui_kits/pos/MenuGrid.jsx":"98b6b797cd3d","ui_kits/pos/Navbar.jsx":"ed2f5a63d5be"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SystemsMXDesignSystem_019dda = window.SystemsMXDesignSystem_019dda || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/analyze/CFDITable.jsx
try { (() => {
// CFDITable.jsx — SystemsMX Analyze
// <script type="text/babel" src="CFDITable.jsx"></script>

const ALL_CFDIS = [{
  uuid: 'A1B2-C3D4-E5F6',
  rfc: 'ABC120501ABC',
  emisor: 'Restaurantes del Bajío SA de CV',
  concepto: 'Servicios de alimentación',
  monto: '$8,450.00',
  tipo: 'Ingreso',
  estado: 'Vigente',
  fecha: '28/04/2026'
}, {
  uuid: 'G7H8-I9J0-K1L2',
  rfc: 'XYZ870312XYZ',
  emisor: 'Proveedores Jalisco SA',
  concepto: 'Insumos de cocina',
  monto: '$22,300.00',
  tipo: 'Egreso',
  estado: 'Vigente',
  fecha: '27/04/2026'
}, {
  uuid: 'M3N4-O5P6-Q7R8',
  rfc: 'MNO991215MNO',
  emisor: 'Telecom Corporativo',
  concepto: 'Servicio de internet',
  monto: '$3,120.00',
  tipo: 'Egreso',
  estado: 'Cancelado',
  fecha: '25/04/2026'
}, {
  uuid: 'S9T0-U1V2-W3X4',
  rfc: 'ABC120501ABC',
  emisor: 'Restaurantes del Bajío SA de CV',
  concepto: 'Servicios de alimentación',
  monto: '$15,700.00',
  tipo: 'Ingreso',
  estado: 'Vigente',
  fecha: '24/04/2026'
}, {
  uuid: 'Y5Z6-A7B8-C9D0',
  rfc: 'PQR650830PQR',
  emisor: 'Distribuidora Noreste SC',
  concepto: 'Productos lácteos',
  monto: '$9,880.00',
  tipo: 'Egreso',
  estado: 'Vigente',
  fecha: '23/04/2026'
}, {
  uuid: 'E1F2-G3H4-I5J6',
  rfc: 'STU780401STU',
  emisor: 'Limpieza Industrial GDL',
  concepto: 'Servicio de limpieza',
  monto: '$5,200.00',
  tipo: 'Egreso',
  estado: 'Vigente',
  fecha: '22/04/2026'
}, {
  uuid: 'K7L8-M9N0-O1P2',
  rfc: 'ABC120501ABC',
  emisor: 'Restaurantes del Bajío SA de CV',
  concepto: 'Servicio de catering',
  monto: '$31,400.00',
  tipo: 'Ingreso',
  estado: 'Vigente',
  fecha: '20/04/2026'
}, {
  uuid: 'Q3R4-S5T6-U7V8',
  rfc: 'VWX940101VWX',
  emisor: 'CFE Suministrador',
  concepto: 'Servicio eléctrico',
  monto: '$4,750.00',
  tipo: 'Egreso',
  estado: 'Cancelado',
  fecha: '18/04/2026'
}];
function CFDITable() {
  const [filter, setFilter] = React.useState('');
  const [tipoFilter, setTipoFilter] = React.useState('Todos');
  const [estadoFilter, setEstadoFilter] = React.useState('Todos');
  const [selected, setSelected] = React.useState(null);
  const filtered = ALL_CFDIS.filter(c => {
    const matchText = !filter || c.rfc.toLowerCase().includes(filter.toLowerCase()) || c.emisor.toLowerCase().includes(filter.toLowerCase()) || c.uuid.toLowerCase().includes(filter.toLowerCase());
    const matchTipo = tipoFilter === 'Todos' || c.tipo === tipoFilter;
    const matchEstado = estadoFilter === 'Todos' || c.estado === estadoFilter;
    return matchText && matchTipo && matchEstado;
  });
  const inputStyle = {
    fontFamily: "'Rubik', sans-serif",
    fontSize: 13,
    border: '1px solid #d1d5db',
    borderRadius: 6,
    padding: '7px 10px',
    outline: 'none',
    background: 'white'
  };
  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      overflowY: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 16,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      ...inputStyle,
      width: 260
    },
    placeholder: "Buscar por RFC, emisor, UUID\u2026",
    value: filter,
    onChange: e => setFilter(e.target.value)
  }), /*#__PURE__*/React.createElement("select", {
    style: selectStyle,
    value: tipoFilter,
    onChange: e => setTipoFilter(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "Todos"), /*#__PURE__*/React.createElement("option", null, "Ingreso"), /*#__PURE__*/React.createElement("option", null, "Egreso")), /*#__PURE__*/React.createElement("select", {
    style: selectStyle,
    value: estadoFilter,
    onChange: e => setEstadoFilter(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "Todos"), /*#__PURE__*/React.createElement("option", null, "Vigente"), /*#__PURE__*/React.createElement("option", null, "Cancelado")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 12,
      color: '#9ca3af',
      marginLeft: 'auto'
    }
  }, filtered.length, " comprobantes"), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 14px',
      background: '#024a7a',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      fontFamily: "'Quicksand'",
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-download"
  }), " Exportar XML")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: 10,
      boxShadow: '0 4px 8px rgba(0,0,0,.08)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: '#f9fafb'
    }
  }, ['UUID', 'RFC', 'Emisor / Concepto', 'Total', 'Tipo', 'Estado', 'Fecha', ''].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: '11px 14px',
      fontFamily: "'Quicksand'",
      fontSize: 10,
      fontWeight: 700,
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      textAlign: 'left',
      borderBottom: '1px solid #f3f4f6',
      whiteSpace: 'nowrap'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.uuid,
    style: {
      borderTop: '1px solid #f3f4f6',
      background: selected === c.uuid ? '#f5f9fc' : 'transparent',
      cursor: 'pointer'
    },
    onClick: () => setSelected(selected === c.uuid ? null : c.uuid),
    onMouseEnter: e => {
      if (selected !== c.uuid) e.currentTarget.style.background = '#f9fafb';
    },
    onMouseLeave: e => {
      if (selected !== c.uuid) e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 14px',
      fontFamily: "'Rubik Mono One', monospace",
      fontSize: 10,
      color: '#024a7a',
      whiteSpace: 'nowrap'
    }
  }, c.uuid), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 14px',
      fontFamily: "'Rubik Mono One', monospace",
      fontSize: 10,
      color: '#374151',
      whiteSpace: 'nowrap'
    }
  }, c.rfc), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 14px',
      maxWidth: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Rubik'",
      fontSize: 13,
      fontWeight: 600,
      color: '#111',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, c.emisor), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Rubik'",
      fontSize: 11,
      color: '#9ca3af',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, c.concepto)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 14px',
      fontFamily: "'Rubik'",
      fontSize: 13,
      fontWeight: 700,
      color: '#111',
      whiteSpace: 'nowrap'
    }
  }, c.monto), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 11,
      fontWeight: 700,
      color: c.tipo === 'Ingreso' ? '#065f46' : '#374151'
    }
  }, c.tipo)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 14px'
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    estado: c.estado
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 14px',
      fontFamily: "'Quicksand'",
      fontSize: 12,
      color: '#9ca3af',
      whiteSpace: 'nowrap'
    }
  }, c.fecha), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 14px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: '1px solid #d2e2ee',
      borderRadius: 5,
      padding: '3px 8px',
      cursor: 'pointer',
      color: '#024a7a',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-download"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '12px 16px',
      borderTop: '1px solid #f3f4f6',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 12,
      color: '#9ca3af',
      marginRight: 8
    }
  }, "P\xE1gina 1 de 12"), ['bi-chevron-left', 'bi-chevron-right'].map(icon => /*#__PURE__*/React.createElement("button", {
    key: icon,
    style: {
      width: 30,
      height: 30,
      borderRadius: 5,
      border: '1px solid #d2e2ee',
      background: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi ${icon}`,
    style: {
      color: '#374151',
      fontSize: 12
    }
  }))))));
}
Object.assign(window, {
  CFDITable,
  ALL_CFDIS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/analyze/CFDITable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/analyze/Dashboard.jsx
try { (() => {
// Dashboard.jsx — SystemsMX Analyze
// <script type="text/babel" src="Dashboard.jsx"></script>

const STATS = [{
  label: 'CFDIs Emitidos',
  value: '1,284',
  icon: 'bi-file-earmark-arrow-up',
  color: '#024a7a',
  bg: '#eaf3f9',
  delta: '+12% vs mes anterior'
}, {
  label: 'CFDIs Recibidos',
  value: '3,471',
  icon: 'bi-file-earmark-arrow-down',
  color: '#10b981',
  bg: '#d1fae5',
  delta: '+8% vs mes anterior'
}, {
  label: 'Total Facturado',
  value: '$4.2M',
  icon: 'bi-currency-dollar',
  color: '#0a3d62',
  bg: '#d2e2ee',
  delta: 'MXN · Abril 2026'
}, {
  label: 'Cancelados',
  value: '47',
  icon: 'bi-file-earmark-x',
  color: '#ef4444',
  bg: '#fee2e2',
  delta: '3.6% del total'
}];
const RECENT = [{
  uuid: 'A1B2-C3D4',
  rfc: 'ABC120501ABC',
  emisor: 'Restaurantes del Bajío',
  monto: '$8,450.00',
  tipo: 'Ingreso',
  estado: 'Vigente',
  fecha: '28/04/2026'
}, {
  uuid: 'E5F6-G7H8',
  rfc: 'XYZ870312XYZ',
  emisor: 'Proveedores Jalisco SA',
  monto: '$22,300.00',
  tipo: 'Egreso',
  estado: 'Vigente',
  fecha: '27/04/2026'
}, {
  uuid: 'I9J0-K1L2',
  rfc: 'MNO991215MNO',
  emisor: 'Telecom Corporativo',
  monto: '$3,120.00',
  tipo: 'Egreso',
  estado: 'Cancelado',
  fecha: '25/04/2026'
}, {
  uuid: 'M3N4-O5P6',
  rfc: 'ABC120501ABC',
  emisor: 'Restaurantes del Bajío',
  monto: '$15,700.00',
  tipo: 'Ingreso',
  estado: 'Vigente',
  fecha: '24/04/2026'
}, {
  uuid: 'Q7R8-S9T0',
  rfc: 'PQR650830PQR',
  emisor: 'Distribuidora Noreste',
  monto: '$9,880.00',
  tipo: 'Egreso',
  estado: 'Vigente',
  fecha: '23/04/2026'
}];
function StatCard({
  stat
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: 10,
      boxShadow: '0 4px 8px rgba(0,0,0,.08)',
      padding: '18px 20px',
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 8,
      background: stat.bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi ${stat.icon}`,
    style: {
      color: stat.color,
      fontSize: 18
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 10,
      fontWeight: 700,
      color: '#9ca3af',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, stat.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Rubik Mono One', monospace",
      fontSize: 26,
      color: stat.color,
      lineHeight: 1.1
    }
  }, stat.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 11,
      color: '#6b7280',
      marginTop: 6
    }
  }, stat.delta));
}
function StatusBadge({
  estado
}) {
  const styles = {
    Vigente: {
      bg: '#d1fae5',
      color: '#065f46'
    },
    Cancelado: {
      bg: '#fee2e2',
      color: '#991b1b'
    }
  };
  const s = styles[estado] || {
    bg: '#f3f4f6',
    color: '#374151'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: s.bg,
      color: s.color,
      fontFamily: "'Quicksand'",
      fontSize: 11,
      fontWeight: 700,
      padding: '2px 8px',
      borderRadius: 9999
    }
  }, estado);
}
function Dashboard({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      overflowY: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 12,
      color: '#6b7280',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-calendar3",
    style: {
      marginRight: 6
    }
  }), "Per\xEDodo: Abril 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, ['Mes', 'Trim.', 'Año'].map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    style: {
      padding: '4px 12px',
      borderRadius: 5,
      border: '1px solid #d2e2ee',
      background: i === 0 ? '#024a7a' : 'white',
      color: i === 0 ? 'white' : '#374151',
      fontFamily: "'Quicksand'",
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 24
    }
  }, STATS.map(s => /*#__PURE__*/React.createElement(StatCard, {
    key: s.label,
    stat: s
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: 10,
      boxShadow: '0 4px 8px rgba(0,0,0,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      borderBottom: '1px solid #f3f4f6'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Rubik'",
      fontSize: 15,
      fontWeight: 700,
      color: '#111'
    }
  }, "Actividad reciente"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('cfdis'),
    style: {
      background: 'none',
      border: 'none',
      fontFamily: "'Quicksand'",
      fontSize: 12,
      color: '#024a7a',
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "Ver todos ", /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-right"
  }))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: '#f9fafb'
    }
  }, ['UUID', 'RFC Emisor', 'Concepto', 'Total', 'Tipo', 'Estado', 'Fecha'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: '10px 16px',
      fontFamily: "'Quicksand'",
      fontSize: 11,
      fontWeight: 700,
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      textAlign: 'left'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, RECENT.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.uuid,
    style: {
      borderTop: '1px solid #f3f4f6'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#f9fafb',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      fontFamily: "'Rubik Mono One', monospace",
      fontSize: 11,
      color: '#024a7a'
    }
  }, r.uuid), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      fontFamily: "'Rubik Mono One', monospace",
      fontSize: 11,
      color: '#374151'
    }
  }, r.rfc), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      fontFamily: "'Rubik'",
      fontSize: 13,
      color: '#374151',
      maxWidth: 160,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.emisor), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      fontFamily: "'Rubik'",
      fontSize: 13,
      fontWeight: 700,
      color: '#111'
    }
  }, r.monto), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 11,
      fontWeight: 700,
      color: r.tipo === 'Ingreso' ? '#10b981' : '#374151'
    }
  }, r.tipo)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px'
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    estado: r.estado
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      fontFamily: "'Quicksand'",
      fontSize: 12,
      color: '#9ca3af'
    }
  }, r.fecha)))))));
}
Object.assign(window, {
  Dashboard,
  StatusBadge,
  RECENT
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/analyze/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/analyze/Sidebar.jsx
try { (() => {
// Sidebar.jsx — SystemsMX Analyze
// Export to window for use in index.html
// <script type="text/babel" src="Sidebar.jsx"></script>

const {
  useState
} = React;
const NAV_ITEMS = [{
  id: 'dashboard',
  icon: 'bi-grid-fill',
  label: 'Dashboard'
}, {
  id: 'cfdis',
  icon: 'bi-file-earmark-text',
  label: 'CFDIs'
}, {
  id: 'nomina',
  icon: 'bi-people-fill',
  label: 'Nómina'
}, {
  id: 'contabilidad',
  icon: 'bi-journal-bookmark-fill',
  label: 'Contabilidad'
}, {
  id: 'empresas',
  icon: 'bi-building',
  label: 'Empresas'
}];
const BOTTOM_ITEMS = [{
  id: 'config',
  icon: 'bi-gear-fill',
  label: 'Configuración'
}];
function Sidebar({
  active,
  onNavigate
}) {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarStyles = {
    width: collapsed ? 56 : 220,
    minHeight: '100vh',
    background: '#0a3d62',
    display: 'flex',
    flexDirection: 'column',
    transition: 'width 0.2s ease',
    flexShrink: 0,
    overflow: 'hidden'
  };
  const brandStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '18px 14px 14px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    minHeight: 64
  };
  const logoStyles = {
    width: 30,
    height: 30,
    borderRadius: '50%',
    border: '2px solid #add8e6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Rubik Mono One', monospace",
    fontSize: 9,
    color: '#add8e6',
    flexShrink: 0
  };
  function NavItem({
    item,
    isActive
  }) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: () => onNavigate(item.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 14px',
        cursor: 'pointer',
        background: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
        borderLeft: isActive ? '3px solid #add8e6' : '3px solid transparent',
        transition: 'background 0.15s',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `bi ${item.icon}`,
      style: {
        color: isActive ? '#add8e6' : 'rgba(255,255,255,0.7)',
        fontSize: 16,
        flexShrink: 0
      }
    }), !collapsed && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Quicksand', sans-serif",
        fontSize: 14,
        fontWeight: isActive ? 700 : 500,
        color: isActive ? '#fff' : 'rgba(255,255,255,0.75)'
      }
    }, item.label));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: sidebarStyles
  }, /*#__PURE__*/React.createElement("div", {
    style: brandStyles
  }, /*#__PURE__*/React.createElement("div", {
    style: logoStyles
  }, "SMX"), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Rubik Mono One', monospace",
      fontSize: 13,
      color: 'white',
      letterSpacing: '0.06em'
    }
  }, "SYSTEMSMX")), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      paddingTop: 8
    }
  }, NAV_ITEMS.map(item => /*#__PURE__*/React.createElement(NavItem, {
    key: item.id,
    item: item,
    isActive: active === item.id
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingBottom: 8
    }
  }, BOTTOM_ITEMS.map(item => /*#__PURE__*/React.createElement(NavItem, {
    key: item.id,
    item: item,
    isActive: active === item.id
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => setCollapsed(!collapsed),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 14px',
      cursor: 'pointer',
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi ${collapsed ? 'bi-chevron-double-right' : 'bi-chevron-double-left'}`,
    style: {
      color: 'white',
      fontSize: 14,
      flexShrink: 0
    }
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 13,
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Colapsar"))));
}
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/analyze/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/analyze/TopBar.jsx
try { (() => {
// TopBar.jsx — SystemsMX Analyze
// <script type="text/babel" src="TopBar.jsx"></script>

const EMPRESAS = [{
  id: 1,
  rfc: 'ABC123456ABC',
  nombre: 'Restaurantes del Bajío SA'
}, {
  id: 2,
  rfc: 'XYZ987654XYZ',
  nombre: 'Cafetería ITESO SC'
}, {
  id: 3,
  rfc: 'MNO112233MNO',
  nombre: 'Distribuidora Torres SRL'
}];
function TopBar({
  screen,
  onSATDownload
}) {
  const [empresa, setEmpresa] = React.useState(EMPRESAS[0]);
  const [open, setOpen] = React.useState(false);
  const TITLES = {
    dashboard: 'Dashboard',
    cfdis: 'Comprobantes Fiscales',
    nomina: 'Nómina',
    contabilidad: 'Contabilidad Electrónica',
    empresas: 'Gestión de Empresas',
    config: 'Configuración'
  };
  const topBarStyles = {
    height: 56,
    background: 'white',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    gap: 12,
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: topBarStyles
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Rubik', sans-serif",
      fontSize: 16,
      fontWeight: 700,
      color: '#111',
      flex: 1
    }
  }, TITLES[screen] || 'SystemsMX'), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      background: '#f5f9fc',
      border: '1px solid #d2e2ee',
      borderRadius: 6,
      padding: '6px 12px',
      fontFamily: "'Quicksand', sans-serif",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-building",
    style: {
      color: '#024a7a',
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#111',
      fontWeight: 600,
      maxWidth: 160,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, empresa.nombre), /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-down",
    style: {
      color: '#6b7280',
      fontSize: 11
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '110%',
      right: 0,
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      boxShadow: '0 4px 12px rgba(0,0,0,.12)',
      zIndex: 100,
      minWidth: 240
    }
  }, EMPRESAS.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    onClick: () => {
      setEmpresa(e);
      setOpen(false);
    },
    style: {
      padding: '10px 14px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      background: empresa.id === e.id ? '#f5f9fc' : 'transparent',
      borderBottom: '1px solid #f3f4f6'
    },
    onMouseEnter: el => el.currentTarget.style.background = '#f5f9fc',
    onMouseLeave: el => el.currentTarget.style.background = empresa.id === e.id ? '#f5f9fc' : 'transparent'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 13,
      fontWeight: 700,
      color: '#111'
    }
  }, e.nombre), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Rubik Mono One', monospace",
      fontSize: 10,
      color: '#6b7280'
    }
  }, e.rfc))))), /*#__PURE__*/React.createElement("button", {
    onClick: onSATDownload,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 14px',
      background: '#024a7a',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      fontFamily: "'Quicksand', sans-serif",
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-cloud-download-fill",
    style: {
      fontSize: 13
    }
  }), "Descargar SAT"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: '#d2e2ee',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Rubik Mono One', monospace",
      fontSize: 11,
      color: '#024a7a',
      cursor: 'pointer'
    }
  }, "JR"));
}
Object.assign(window, {
  TopBar,
  EMPRESAS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/analyze/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pos/AdminPanel.jsx
try { (() => {
// AdminPanel.jsx — SystemsMX POS Cafetería
// <script type="text/babel" src="AdminPanel.jsx"></script>

function AdminPanel() {
  const [form, setForm] = React.useState({
    nombre: '',
    descripcion: '',
    precio: '',
    restaurante: ''
  });
  const [saved, setSaved] = React.useState(false);
  const [items, setItems] = React.useState([{
    id: 1,
    nombre: 'Torta de pierna',
    restaurante: 'El Feo',
    precio: '$65.00'
  }, {
    id: 2,
    nombre: 'Bowl de quinoa',
    restaurante: 'Limón y Chía',
    precio: '$89.00'
  }, {
    id: 3,
    nombre: 'Enchiladas verdes',
    restaurante: 'La Taquería',
    precio: '$75.00'
  }]);
  function handleSubmit(e) {
    e.preventDefault();
    setItems(prev => [...prev, {
      id: Date.now(),
      ...form,
      precio: form.precio ? `$${form.precio}` : 'Sin precio'
    }]);
    setSaved(true);
    setForm({
      nombre: '',
      descripcion: '',
      precio: '',
      restaurante: ''
    });
    setTimeout(() => setSaved(false), 2000);
  }
  const inputStyle = {
    fontFamily: "'Rubik', sans-serif",
    fontSize: 14,
    border: '1px solid #d1d5db',
    borderRadius: 6,
    padding: '9px 10px',
    width: '100%',
    outline: 'none',
    marginBottom: 12
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#f4f4f4',
      fontFamily: "'Rubik', sans-serif"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0a3d62',
      color: '#a3d5f7',
      textAlign: 'center',
      padding: '20px 16px',
      fontFamily: "'Rubik Mono One', monospace",
      fontSize: 22,
      letterSpacing: '0.06em'
    }
  }, "CREAR NUEVO PLATILLO"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      maxWidth: 900,
      margin: '30px auto',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: 10,
      boxShadow: '0 4px 8px rgba(0,0,0,.1)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: '#6b7280',
      display: 'block',
      marginBottom: 5
    }
  }, "Nombre del platillo"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    placeholder: "Ej. Tacos de canasta",
    value: form.nombre,
    onChange: e => setForm(p => ({
      ...p,
      nombre: e.target.value
    })),
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: '#6b7280',
      display: 'block',
      marginBottom: 5
    }
  }, "Descripci\xF3n"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inputStyle,
      resize: 'vertical',
      minHeight: 72
    },
    placeholder: "Ingredientes, acompa\xF1amientos\u2026",
    value: form.descripcion,
    onChange: e => setForm(p => ({
      ...p,
      descripcion: e.target.value
    })),
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: '#6b7280',
      display: 'block',
      marginBottom: 5
    }
  }, "Precio (MXN)"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "number",
    placeholder: "0.00",
    value: form.precio,
    onChange: e => setForm(p => ({
      ...p,
      precio: e.target.value
    }))
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: '#6b7280',
      display: 'block',
      marginBottom: 5
    }
  }, "Restaurante"), /*#__PURE__*/React.createElement("select", {
    style: {
      ...inputStyle,
      cursor: 'pointer'
    },
    value: form.restaurante,
    onChange: e => setForm(p => ({
      ...p,
      restaurante: e.target.value
    })),
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecciona restaurante"), /*#__PURE__*/React.createElement("option", null, "El Feo"), /*#__PURE__*/React.createElement("option", null, "Lim\xF3n y Ch\xEDa"), /*#__PURE__*/React.createElement("option", null, "La Taquer\xEDa"), /*#__PURE__*/React.createElement("option", null, "El Terrible Juan"), /*#__PURE__*/React.createElement("option", null, "G\xFCich")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      width: '100%',
      padding: '10px',
      background: '#10b981',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      fontFamily: "'Quicksand'",
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-plus-circle",
    style: {
      marginRight: 8
    }
  }), "Guardar platillo"), saved && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: "'Quicksand'",
      fontSize: 13,
      fontWeight: 700,
      color: '#10b981',
      textAlign: 'center'
    }
  }, "\u2713 Platillo guardado correctamente"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Rubik'",
      fontSize: 15,
      fontWeight: 700,
      color: '#111',
      marginBottom: 12
    }
  }, "Platillos registrados (", items.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: {
      background: 'white',
      borderRadius: 8,
      boxShadow: '0 2px 4px rgba(0,0,0,.07)',
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-egg-fried",
    style: {
      color: '#024a7a',
      fontSize: 18,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Rubik'",
      fontSize: 14,
      fontWeight: 600,
      color: '#111',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.nombre), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Quicksand'",
      fontSize: 11,
      color: '#9ca3af'
    }
  }, item.restaurante)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Rubik'",
      fontSize: 14,
      fontWeight: 700,
      color: '#024a7a',
      flexShrink: 0
    }
  }, item.precio), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: '1px solid #fee2e2',
      borderRadius: 5,
      padding: '3px 8px',
      color: '#ef4444',
      cursor: 'pointer',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-trash3"
  }))))))));
}
Object.assign(window, {
  AdminPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pos/AdminPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pos/Cart.jsx
try { (() => {
// Cart.jsx — SystemsMX POS Cafetería
// <script type="text/babel" src="Cart.jsx"></script>

function Cart({
  cart,
  onUpdateQty,
  onRemove,
  onClear,
  onPay,
  userRole
}) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = userRole === 'docente' ? subtotal * 0.1 : 0;
  const total = subtotal - discount;
  if (cart.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        gap: 12,
        color: '#9ca3af'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-cart2",
      style: {
        fontSize: 48
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Rubik'",
        fontSize: 16,
        fontWeight: 500
      }
    }, "Tu carrito est\xE1 vac\xEDo"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Quicksand'",
        fontSize: 13
      }
    }, "Agrega platillos desde el men\xFA"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      padding: 24,
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Rubik'",
      fontSize: 20,
      fontWeight: 700,
      color: 'white',
      marginBottom: 16
    }
  }, "Tu carrito"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, cart.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: {
      background: 'white',
      borderRadius: 10,
      boxShadow: '0 2px 6px rgba(0,0,0,.1)',
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Rubik'",
      fontSize: 14,
      fontWeight: 700,
      color: '#111'
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Rubik'",
      fontSize: 13,
      color: '#6b7280',
      marginTop: 2
    }
  }, "$", item.price, ".00 c/u")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onUpdateQty(item.id, item.qty - 1),
    style: {
      width: 28,
      height: 28,
      borderRadius: 5,
      border: '1px solid #d1d5db',
      background: 'white',
      cursor: 'pointer',
      fontWeight: 700,
      color: '#374151'
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Rubik'",
      fontSize: 14,
      fontWeight: 700,
      minWidth: 20,
      textAlign: 'center'
    }
  }, item.qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => onUpdateQty(item.id, item.qty + 1),
    style: {
      width: 28,
      height: 28,
      borderRadius: 5,
      border: '1px solid #d1d5db',
      background: 'white',
      cursor: 'pointer',
      fontWeight: 700,
      color: '#374151'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Rubik'",
      fontSize: 14,
      fontWeight: 700,
      color: '#024a7a',
      minWidth: 72,
      textAlign: 'right'
    }
  }, "$", (item.price * item.qty).toFixed(2)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(item.id),
    style: {
      background: 'transparent',
      border: '1px solid #fee2e2',
      borderRadius: 5,
      color: '#ef4444',
      padding: '4px 8px',
      cursor: 'pointer',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-trash3"
  }))))), /*#__PURE__*/React.createElement("button", {
    onClick: onClear,
    style: {
      marginTop: 14,
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: 6,
      color: 'rgba(255,255,255,0.6)',
      fontFamily: "'Quicksand'",
      fontSize: 13,
      fontWeight: 600,
      padding: '7px 16px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-trash3",
    style: {
      marginRight: 6
    }
  }), "Vaciar carrito")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: 12,
      boxShadow: '0 4px 8px rgba(0,0,0,.1)',
      padding: '20px 18px',
      position: 'sticky',
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Rubik'",
      fontSize: 16,
      fontWeight: 700,
      color: '#111',
      marginBottom: 14
    }
  }, "Resumen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 12
    }
  }, cart.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: "'Rubik'",
      fontSize: 13,
      color: '#374151'
    }
  }, /*#__PURE__*/React.createElement("span", null, item.name, " x", item.qty), /*#__PURE__*/React.createElement("span", null, "$", (item.price * item.qty).toFixed(2))))), /*#__PURE__*/React.createElement("hr", {
    style: {
      borderColor: '#e5e7eb',
      margin: '10px 0'
    }
  }), discount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: "'Quicksand'",
      fontSize: 13,
      color: '#10b981',
      fontWeight: 600,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Descuento docente (10%)"), /*#__PURE__*/React.createElement("span", null, "-$", discount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: "'Rubik'",
      fontSize: 16,
      fontWeight: 700,
      color: '#111',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, "$", total.toFixed(2), " MXN")), /*#__PURE__*/React.createElement("button", {
    onClick: onPay,
    style: {
      width: '100%',
      padding: '10px',
      background: '#10b981',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      fontFamily: "'Quicksand'",
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-credit-card",
    style: {
      marginRight: 8
    }
  }), "Pagar"))));
}
Object.assign(window, {
  Cart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pos/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pos/MenuGrid.jsx
try { (() => {
// MenuGrid.jsx — SystemsMX POS Cafetería
// <script type="text/babel" src="MenuGrid.jsx"></script>

const RESTAURANTS = [{
  id: 'el-feo',
  name: 'El Feo',
  items: [{
    id: 1,
    name: 'Torta de pierna',
    desc: 'Pierna adobada, frijoles, chile jalapeño',
    price: 65,
    available: true
  }, {
    id: 2,
    name: 'Torta de milanesa',
    desc: 'Milanesa empanizada, lechuga, jitomate',
    price: 70,
    available: true
  }, {
    id: 3,
    name: 'Agua fresca',
    desc: 'Horchata, jamaica o tamarindo (500ml)',
    price: 20,
    available: true
  }]
}, {
  id: 'limon-y-chia',
  name: 'Limón y Chía',
  items: [{
    id: 4,
    name: 'Bowl de quinoa',
    desc: 'Quinoa, verduras asadas, aderezo de limón',
    price: 89,
    available: true
  }, {
    id: 5,
    name: 'Carne en su jugo',
    desc: 'Clásico jalisciense, ensalada, gelatina',
    price: 95,
    available: true
  }, {
    id: 6,
    name: 'Jugo verde',
    desc: 'Espinaca, manzana, pepino, jengibre',
    price: 35,
    available: false
  }]
}, {
  id: 'la-taqueria',
  name: 'La Taquería',
  items: [{
    id: 7,
    name: 'Enchiladas verdes',
    desc: 'Tres enchiladas, salsa verde, crema, queso',
    price: 75,
    available: true
  }, {
    id: 8,
    name: 'Tacos de pastor (3)',
    desc: 'Tortilla de maíz, cebolla, cilantro, salsa',
    price: 55,
    available: true
  }, {
    id: 9,
    name: 'Quesadilla de flor',
    desc: 'Flor de calabaza, queso Oaxaca',
    price: 60,
    available: true
  }]
}, {
  id: 'güich',
  name: 'Güich',
  items: [{
    id: 10,
    name: 'Filete de pescado',
    desc: 'Verduras, puré de papa, agua de durazno',
    price: 105,
    available: true
  }, {
    id: 11,
    name: 'Pasta alfredo',
    desc: 'Fettuccine, salsa bechamel, parmesano',
    price: 85,
    available: true
  }]
}];
function MenuGrid({
  cart,
  onAddToCart
}) {
  const [openSection, setOpenSection] = React.useState('limon-y-chia');
  function isInCart(itemId) {
    return cart.find(c => c.id === itemId);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 40px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Rubik Mono One', monospace",
      fontSize: 26,
      textAlign: 'center',
      color: '#add8e6',
      margin: '28px 0 20px',
      letterSpacing: '0.04em'
    }
  }, "Men\xFAs"), RESTAURANTS.map(rest => /*#__PURE__*/React.createElement("div", {
    key: rest.id,
    style: {
      margin: '0 20px 8px',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: 8,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpenSection(openSection === rest.id ? null : rest.id),
    style: {
      width: '100%',
      padding: '14px 18px',
      background: openSection === rest.id ? '#024a7a' : '#d2e2ee',
      border: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Quicksand', sans-serif",
      fontSize: 15,
      fontWeight: 700,
      color: openSection === rest.id ? 'white' : '#000625'
    }
  }, rest.name), /*#__PURE__*/React.createElement("i", {
    className: `bi bi-chevron-${openSection === rest.id ? 'up' : 'down'}`,
    style: {
      color: openSection === rest.id ? 'white' : '#024a7a',
      fontSize: 13
    }
  })), openSection === rest.id && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#f1f1f1',
      padding: 16,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: 12
    }
  }, rest.items.map(item => {
    const inCart = isInCart(item.id);
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      style: {
        background: 'white',
        borderRadius: 10,
        boxShadow: '0 2px 6px rgba(0,0,0,.08)',
        overflow: 'hidden',
        opacity: item.available ? 1 : 0.55
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 60,
        background: 'linear-gradient(135deg, #024a7a, #1a7fad)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-egg-fried",
      style: {
        color: '#add8e6',
        fontSize: 22
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 12px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Rubik'",
        fontSize: 14,
        fontWeight: 700,
        color: '#111',
        marginBottom: 3
      }
    }, item.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Rubik'",
        fontSize: 11,
        color: '#9ca3af',
        marginBottom: 8,
        lineHeight: 1.4
      }
    }, item.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Rubik'",
        fontSize: 15,
        fontWeight: 700,
        color: '#024a7a'
      }
    }, "$", item.price, ".00"), item.available ? /*#__PURE__*/React.createElement("button", {
      onClick: () => onAddToCart(item),
      style: {
        padding: '4px 10px',
        borderRadius: 5,
        border: 'none',
        background: inCart ? '#10b981' : '#024a7a',
        color: 'white',
        fontFamily: "'Quicksand'",
        fontSize: 12,
        fontWeight: 700,
        cursor: 'pointer'
      }
    }, inCart ? '✓ Agregado' : 'Agregar') : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Quicksand'",
        fontSize: 11,
        color: '#9ca3af'
      }
    }, "No disponible"))));
  })))));
}
Object.assign(window, {
  MenuGrid,
  RESTAURANTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pos/MenuGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pos/Navbar.jsx
try { (() => {
// Navbar.jsx — SystemsMX POS Cafetería
// <script type="text/babel" src="Navbar.jsx"></script>

function POSNavbar({
  cartCount,
  onCartClick,
  onLoginClick,
  onLogoClick,
  dark = true
}) {
  const bg = dark ? '#d2e2ee' : '#0a3d62';
  const textColor = dark ? '#000625' : '#ffffff';
  const borderColor = dark ? '#024a7a' : 'rgba(255,255,255,0.7)';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      background: bg,
      height: 64,
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      gap: 12,
      boxShadow: '0 2px 8px rgba(0,0,0,.12)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onLogoClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: dark ? '#024a7a' : 'rgba(255,255,255,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Rubik Mono One', monospace",
      fontSize: 10,
      color: dark ? 'white' : '#add8e6',
      border: `2px solid ${dark ? 'transparent' : '#add8e6'}`
    }
  }, "SMX"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Rubik Mono One', monospace",
      fontSize: 14,
      color: textColor,
      letterSpacing: '0.06em'
    }
  }, "CAFETER\xCDA")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, ['Cafetería', 'Menú del día', 'Mis pedidos'].map((label, i) => /*#__PURE__*/React.createElement("a", {
    key: label,
    style: {
      fontFamily: "'Quicksand', sans-serif",
      fontSize: 14,
      fontWeight: i === 0 ? 700 : 500,
      color: textColor,
      padding: '6px 12px',
      borderRadius: 5,
      cursor: 'pointer',
      background: i === 0 ? dark ? 'rgba(2,74,122,0.12)' : 'rgba(255,255,255,0.15)' : 'transparent',
      textDecoration: 'none'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCartClick,
    style: {
      position: 'relative',
      background: 'transparent',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 6,
      width: 36,
      height: 36,
      cursor: 'pointer',
      color: textColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-cart2",
    style: {
      fontSize: 16
    }
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      background: '#ef4444',
      color: 'white',
      borderRadius: '50%',
      width: 18,
      height: 18,
      fontSize: 10,
      fontWeight: 700,
      fontFamily: "'Quicksand'",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount)), /*#__PURE__*/React.createElement("button", {
    onClick: onLoginClick,
    style: {
      background: 'transparent',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 6,
      width: 36,
      height: 36,
      cursor: 'pointer',
      color: textColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-person-circle",
    style: {
      fontSize: 16
    }
  }))));
}
Object.assign(window, {
  POSNavbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pos/Navbar.jsx", error: String((e && e.message) || e) }); }

})();
