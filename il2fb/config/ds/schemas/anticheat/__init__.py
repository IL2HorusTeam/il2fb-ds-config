# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import IntType
from schematics.types.compound import ModelType

from ..interfaces import INISerializable, DefaultProvider
from ..helpers import field_from_ini, field_to_ini
from .lags import Lags
from .speedhack import Speedhack


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Anticheat(Model):
    version_check_level = IntType(
        min_value=0,
        max_value=2,
        default=0,
        required=True,
    )
    lags = ModelType(
        model_spec=Lags,
        required=True,
    )
    speedhack = ModelType(
        model_spec=Speedhack,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'version_check_level': field_from_ini(
                cls.version_check_level, ini,
                'NET', 'checkRuntime',
            ),
            'lags': Lags.from_ini(ini),
            'speedhack': Speedhack.from_ini(ini),
        })

    def to_ini(self, ini):
        field_to_ini(self.version_check_level, ini, 'NET', 'checkRuntime')
        self.lags.to_ini(ini)
        self.speedhack.to_ini(ini)

    @classmethod
    def default(cls):
        return cls({
            'version_check_level': cls.version_check_level.default,
            'lags': Lags.default(),
            'speedhack': Speedhack.default(),
        })
