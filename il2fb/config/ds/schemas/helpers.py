# coding: utf-8

from schematics.types import StringType, IntType, FloatType, BooleanType

from il2fb.config.ds.compat import configparser


_NO_VALUE = object()
_TYPE_TO_GETTER_MAP = {
    StringType: 'get',
    IntType: 'getint',
    FloatType: 'getfloat',
    BooleanType: 'getboolean',
}


def _get_getter(class_type, ini):
    try:
        method_name = _TYPE_TO_GETTER_MAP.get(class_type)
        return getattr(ini, method_name)
    except Exception:
        return ini.get


def field_from_ini(field, ini, section, option, default=_NO_VALUE):
    getter = _get_getter(field.typeclass, ini)
    try:
        return getter(section, option)
    except (configparser.NoSectionError, configparser.NoOptionError):
        return (
            default
            if default is not _NO_VALUE else
            field.default
        )


def field_to_ini(field_value, ini, section, option):
    if not ini.has_section(section):
        ini.add_section(section)

    if isinstance(field_value, bool):
        field_value = 1 if field_value else 0
    elif isinstance(field_value, float):
        field_value = round(field_value, 2)

    ini[section][option] = str(field_value)
