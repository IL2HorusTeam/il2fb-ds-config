# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import StringType

from .interfaces import INISerializable


@zope.interface.implementer(INISerializable)
class About(Model):
    name = StringType(
        default="",
        required=True,
    )
    description = StringType(
        default="",
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'name': ini.get(
                'NET', 'serverName',
                fallback=cls.name.default,
            ),
            'description': ini.get(
                'NET', 'serverDescription',
                fallback=cls.description.default,
            ),
        })
